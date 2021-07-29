import express, { json, urlencoded } from 'express';
import admin from 'firebase-admin';
import serviceAccount from '../../../claves/metal-slug-maker-firebase-adminsdk-8dsbv-e517ebfe1a.json';
// import { db } from './DB/db'

import { Scenario } from './modules/Scenario';
import { Execution } from './modules/Execution';
import { Output } from './modules/Output';

// Express configuration
const app = express();
app.use(json());
app.use(urlencoded({
    extended: true
}));

// DB configuration
// const serviceAccount = process.env.GOOGLE_APPLICATION_CREDENTIALS;
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://metal-slug-maker-default-rtdb.firebaseio.com'
});
const db = admin.firestore();


// HTTP Methods
app.put('/scenario', async (req, res) => {
    const scenario = await db.collection('MSM-Scenario').add(req.body);
    res.send(scenario.id);
});

app.post('/scenario', (req, res) => {
    const scenario = new Scenario(); // id
    const actors = scenario.createActor(req.body.actors);
    const actions = scenario.createActions(req.body.actions);
    const executer = new Execution(actions, actors);
    const scenarioStates = executer.execute(actions, actors);
    const response = new Output();
    const result = response.generateResults(scenarioStates); // returns the JSON

    res.send(result);
});

app.get('/scenario/:id', async (req, res) => {
    const scenario = await db.collection('MSM-Scenario').doc(req.params.id).get();
    res.send(scenario.data());
});

app.listen(3000, function() {
    console.log('listening on 3000');
});