import express from 'express';
import { Runner } from '../modules/Runner';
import { VerifierInterface } from '../api-utilities/VerifierInterface';
import { ScenarioHandler } from '../api-utilities/ScenarioHandler';

export default function(QueryHandler) {
    const router = express.Router();

    // HTTP Methods
    router.put('/', async(req, res) => {
        const id = await QueryHandler.add(req.body);
        res.send({ code: 200, id: id });
    });

    router.post('/', (req, res) => {
        const verifier = new VerifierInterface(req.body, 'scenario');
        if (verifier.check() == true) {
            const runner = new Runner();
            const result = runner.follow(req.body.actors, req.body.actions);
            res.send({ code: 202, result: result });
        } else {
            res.send({ code: 400, error: verifier.check() });
        }
    });

    router.get('/:id', async(req, res) => {
        try {
            const scenario = await QueryHandler.get(req.params.id);
            const verifier = new VerifierInterface(scenario, 'scenario');
            console.log(verifier.check());
            if (verifier.check() == true) {
                const runner = new Runner();
                const result = runner.follow(scenario.actors, scenario.actions);
                res.send({ code: 202, result: result });
            } else {
                res.send({ code:400, error: verifier.check() });
            }
        } catch {
            res.send({ code: 400, error: 'no scenario specified'});
        }
    });

    router.patch('/', async(req, res) => {
        const id = req.body.scenario;
        try {
            const scenario = await QueryHandler.get(id);
            if (!scenario) res.send({code: 400, error: 'Scenario does not exist'});
            const scenarioHandler = new ScenarioHandler(scenario);
            scenarioHandler.replaceAttribute(req.body.value, req.body.attribute);
            await QueryHandler.set(id, scenarioHandler.scenario);
            res.send(scenarioHandler.scenario);
        } catch {
            res.send({ code: 400, error: 'No scenario specified'});
        }
    });

    return router;
}