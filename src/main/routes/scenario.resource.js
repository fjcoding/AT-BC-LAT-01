import express from 'express';
import { Runner } from '../modules/Runner.js';
import { VerifierInterface } from '../api-utilities/VerifierInterface.js';
import { ScenarioHandler } from '../api-utilities/ScenarioHandler.js';

export default function (QueryHandler) {
    const router = express.Router();

    router.put('/', async (req, res) => {
        const id = await QueryHandler.add(req.body);
        res.send({ code: 200, id: id });
    });

    router.get('/:id', async (req, res) => {
        try {
            const scenario = await QueryHandler.get(req.params.id);
            res.send({ code: 200, scenario: scenario });
        } catch {
            res.send({ code: 400, error: 'The scenario does not exist' });
        }
    });

    router.post('/:id', async (req, res) => {
        try {
            const scenario = await QueryHandler.get(req.params.id);
            const verifier = new VerifierInterface(scenario, 'scenario');
            if (verifier.check() == true) {
                const runner = new Runner();
                const result = runner.follow(
                    scenario.actors,
                    scenario.actions,
                    scenario.scenes
                );
                res.send({ code: 200, result: result });
            } else {
                res.send({ code: 400, error: verifier.check() });
            }
        } catch {
            res.send({ code: 400, error: 'Scenario does not exist' });
        }
    });

    router.patch('/', async (req, res) => {
        const id = req.body.scenario;
        try {
            const scenario = await QueryHandler.get(id);
            if (!scenario)
                res.send({ code: 400, error: 'Scenario does not exist' });
            const scenarioHandler = new ScenarioHandler(scenario);
            scenarioHandler.replaceAttribute(
                req.body.value,
                req.body.attribute
            );
            await QueryHandler.set(id, scenarioHandler.scenario);
            res.send(scenarioHandler.scenario);
        } catch {
            res.send({ code: 400, error: 'Could not reach scenario' });
        }
    });

    return router;
}
