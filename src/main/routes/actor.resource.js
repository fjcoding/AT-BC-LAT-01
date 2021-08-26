import express from 'express';
import { VerifierInterface } from '../api-utilities/VerifierInterface.js';
import { ScenarioHandler } from '../api-utilities/ScenarioHandler.js';
const router = express.Router();

export default function (QueryHandler) {
    router.put('/', async (req, res) => {
        var response = {};
        try {
            var scenario = {};
            var id = undefined;
            if (req.body.scenario != undefined) {
                id = req.body.scenario;
                scenario = await QueryHandler.get(id);
            }

            const actor = req.body;
            const verifier = new VerifierInterface(scenario, 'actor');
            if (verifier.check(actor) == true) {
                const handler = new ScenarioHandler(scenario);
                delete actor.scenario;
                handler.pushAttribute(actor, 'actors');
                if (id) {
                    await QueryHandler.set(id, handler.scenario);
                } else {
                    id = await QueryHandler.add(handler.scenario);
                }
                response = {
                    code: 200,
                    actor: req.body.name,
                    scenario: id,
                };
            } else {
                response = { code: 400, error: verifier.check(actor) };
            }
        } catch {
            response = { code: 400, error: 'Could not reach any scenario' };
        } finally {
            res.send(response);
        }
    });

    return router;
}
