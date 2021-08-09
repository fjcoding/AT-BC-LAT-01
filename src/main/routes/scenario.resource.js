import { ScenarioVerifier } from '../api-utilities/ScenarioVerifier';
import { TemplateVerifier } from '../api-utilities/TemplateVerifier';
import { ActorsOfActions } from '../api-utilities/SinglePropertyVerifier';
import { Runner } from '../modules/Runner';
import express from 'express';

export default function(QueryHandler) {
    const router = express.Router();

    // HTTP Methods
    router.put('/', async(req, res) => {
        const scenario = req.body;
        const scenarioVerifier = new ScenarioVerifier([
            new TemplateVerifier(scenario),
            new ActorsOfActions(scenario),
        ]);
        const checkScenarioRespone = scenarioVerifier.check();
        if (checkScenarioRespone == true) {
            const scenario = await QueryHandler.add(req.body);
            res.send({ code: 200, id: scenario });
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

    router.get('/:id', async(req, res) => {
        const scenarioPersisted = await QueryHandler.get(req.params.id);
        const actors = scenarioPersisted.data().actors;
        const actions = scenarioPersisted.data().actions;
        const runner = new Runner();
        const result = runner.follow(actors, actions);
        res.send({ code: 202, result: result });
    });

    return router;
}