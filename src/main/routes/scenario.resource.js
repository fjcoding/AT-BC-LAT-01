import express from 'express';
const router = express.Router();

//Execute scenario
import { Runner } from '../modules/Runner';

import { ScenarioVerifier } from '../api-utilities/ScenarioVerifier';
import { TemplateVerifier } from '../api-utilities/TemplateVerifier';
import { ActorsOfActions } from '../api-utilities/SinglePropertyVerifier';
import admin from 'firebase-admin';
import serviceAccount from '../../../../keys/metal-slug-maker-firebase-adminsdk-8dsbv-e517ebfe1a.json';
// import { db } from './DB/db'
const COLLECTION_NAME = 'MSM-Scenario';

// DB configuration
// const serviceAccount = process.env.GOOGLE_APPLICATION_CREDENTIALS;
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://metal-slug-maker-default-rtdb.firebaseio.com',
});
const db = admin.firestore();

// HTTP Methods
router.put('/', async (req, res) => {
    const scenario = req.body;
    const scenarioVerifier = new ScenarioVerifier([
        new TemplateVerifier(scenario),
        new ActorsOfActions(scenario),
    ]);
    const checkScenarioRespone = scenarioVerifier.check();
    if (checkScenarioRespone == true) {
        const scenario = await db.collection('MSM-Scenario').add(req.body);
        res.send({ code: 200, id: scenario.id });
    } else {
        res.send({ code: 400, error: checkScenarioRespone });
    }
});

router.post('/', (req, res) => {
    const scenarioVerifier = new ScenarioVerifier([
        new TemplateVerifier(req.body),
        new ActorsOfActions(req.body),
    ]);
    const checkScenarioRespone = scenarioVerifier.check();
    if (checkScenarioRespone == true) {
        const runner = new Runner();
        const result = runner.follow(req.body.actors, req.body.actions);
        res.send({ code: 202, result: result });
    } else {
        res.send({ code: 400, error: checkScenarioRespone });
    }
});

router.get('/:id', async (req, res) => {
    const scenarioPersisted = await db
        .collection(COLLECTION_NAME)
        .doc(req.params.id)
        .get();
    const actors = scenarioPersisted.data().actors;
    const actions = scenarioPersisted.data().actions;
    const runner = new Runner();
    const result = runner.follow(actors, actions);

    res.send({ code: 202, result: result });
});

export default router;
