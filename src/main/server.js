import express, { json, urlencoded } from 'express';
import admin from 'firebase-admin';
import serviceAccount from '../../../claves/metal-slug-maker-firebase-adminsdk-8dsbv-e517ebfe1a.json';
// import { db } from './DB/db'

import { Scenario } from './modules/Scenario';
import { Execution } from './modules/Execution';
import { Output } from './modules/Output';
import { ScenarioVerifier } from './api-utilities/ScenarioVerifier';
import { TemplateVerifier } from './api-utilities/TemplateVerifier';
import { ActorsOfActions } from './api-utilities/SinglePropertyVerifier';

const COLLECTION_NAME = 'MSM-Scenario';

// Express configuration
const app = express();
app.use(json());
app.use(
    urlencoded({
        extended: true,
    })
);

// DB configuration
// const serviceAccount = process.env.GOOGLE_APPLICATION_CREDENTIALS;
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://metal-slug-maker-default-rtdb.firebaseio.com',
});
const db = admin.firestore();

// HTTP Methods
app.put('/scenario', async (req, res) => {
    const scenario = req.body;
    const scenarioVerifier = new ScenarioVerifier([new TemplateVerifier(scenario), new ActorsOfActions(scenario)]);
    const checkScenarioRespone = scenarioVerifier.check();
    if (checkScenarioRespone == true) {
        const scenario = await db.collection('MSM-Scenario').add(req.body);
        res.send(scenario.id);
    }

    res.send({code: 400, error: checkScenarioRespone});
});

app.post('/scenario', (req, res) => {

    const scenarioVerifier = new ScenarioVerifier([new TemplateVerifier(req.body), new ActorsOfActions(req.body)]);
    const checkScenarioRespone = scenarioVerifier.check();
    if (checkScenarioRespone == true) {
        const scenario = new Scenario(); // id
        const actors = scenario.createActor(req.body.actors);
        const actions = scenario.createActions(req.body.actions);
        const executer = new Execution(actions, actors);
        const scenarioStates = executer.execute(actions, actors);
        const response = new Output();
        const result = response.generateResults(scenarioStates); // returns the JSON

        res.send({code: 202, result: result});
    }

    res.send({code: 400, error: checkScenarioRespone});
});

app.get('/scenario/:id', async (req, res) => {
    const scenarioPersisted = await db
        .collection(COLLECTION_NAME)
        .doc(req.params.id)
        .get();
    const actors = scenarioPersisted.data().actors;
    const actions = scenarioPersisted.data().actions;
    const executer = new Execution(actions, actors);
    const scenarioStates = executer.execute(actions, actors);
    const response = new Output();
    const result = response.generateResults(scenarioStates);

    res.send({code: 202, result: result});
});

app.listen(3000, function () {
    console.log('listening on 3000');
});
