import express from 'express';
const router = express.Router();
import { Scenario } from '../modules/Scenario';
import { Execution } from '../modules/Execution';
import { Output } from '../modules/Output';
import admin from 'firebase-admin';
import serviceAccount from '../../../../claves/metal-slug-maker-firebase-adminsdk-8dsbv-e517ebfe1a.json';
// import { db } from './DB/db'

// DB configuration
// const serviceAccount = process.env.GOOGLE_APPLICATION_CREDENTIALS;
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://metal-slug-maker-default-rtdb.firebaseio.com'
});
const db = admin.firestore();

// HTTP Methods
router.put('/', async(req, res) => {
    const scenario = await db.collection('MSM-Scenario').add(req.body);
    res.send(scenario.id);
});

router.post('/', (req, res) => {
    const scenario = new Scenario(); // id
    const actors = scenario.createActor(req.body.actors);
    const actions = scenario.createActions(req.body.actions);
    const executer = new Execution(actions, actors);
    const scenarioStates = executer.execute(actions, actors);
    const response = new Output();
    const result = response.generateResults(scenarioStates); // returns the JSON

    res.send(result);
});

/*
router.get('/:id', async(req, res) => {
    const scenario = await db.collection('MSM-Scenario').doc(req.params.id).get();
    res.send(scenario.data());
});
*/
router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Handling GET requests to API/scenarios',
    });
});

export default router;