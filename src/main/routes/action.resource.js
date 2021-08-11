import express from 'express';
import { VerifierInterface } from '../api-utilities/VerifierInterface';
import { ScenarioHandler } from './../api-utilities/ScenarioHandler';
import { Runner } from '../modules/Runner';

const router = express.Router();

export default function(QueryHandler) {
    router.put('/', async(req, res) => {
        const idScenario = req.body.scenario;
        const action = req.body;
        var response = {};
        try {
            const scenario = await QueryHandler.get(idScenario);
            const verifier = new VerifierInterface(scenario, 'action');
            if (verifier.check(action) == true) {
                const handler = new ScenarioHandler(scenario);
                delete action.scenario;
                handler.pushAttribute(action, 'actions');
                await QueryHandler.set(idScenario, handler.scenario);
                response = { code: 202, scenario: handler.scenario };
            } else {
                response = { code: 400, error: verifier.check(action) };
            }
        } catch {
            response = { status: 400, error: 'Could not reach the scenario' };
        } finally {
            res.send(response);
        }
    });

    router.post('/:scenarioID', async(req, res) => {
        var response = {};
        try {
            const scenario = await QueryHandler.get(req.params.scenarioID);
            const verifier = new VerifierInterface(scenario, 'action');
            if (verifier.check(req.body) == true) {
                const runner = new Runner();
                const result = runner.follow(scenario.actors, [req.body]);
                response = { code: 202, result: result };
            } else {
                response = { status: 400, error: verifier.check(req.body) };
            }

        } catch {
            response = { status: 400, error: 'Scenario does not exist' };
        } finally {
            res.send(response);
        }
    });

    return router;
}