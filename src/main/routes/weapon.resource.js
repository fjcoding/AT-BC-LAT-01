import express from 'express';
import { VerifierInterface } from '../api-utilities/VerifierInterface';
import { ScenarioHandler } from '../api-utilities/ScenarioHandler';
const router = express.Router();

export default function(QueryHandler) {
    router.patch('/', async(req, res) => {
        var response = {};
        try {
            const idScenario = req.body.scenario;
            const weapon = req.body;
            const scenario = await QueryHandler.get(idScenario);

            const verifier = new VerifierInterface(scenario, 'weapon');
            if (verifier.check(weapon) == true) {
                const handler = new ScenarioHandler(scenario);
                const actor = weapon.actor;
                delete weapon.scenario;
                delete weapon.actor;
                handler.replaceWeapon(weapon, actor);
                await QueryHandler.set(idScenario, handler.scenario);
                response = { code: 202, scenario: handler.scenario };
            } else {
                response = { code: 400, error: verifier.check(weapon) };
            }

        } catch {
            response = { code: 400, error: 'Could not reach the scenario'};
        } finally {
            res.send(response);
        }
    });

    return router;
}