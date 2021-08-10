import express from 'express';
import { VerifierInterface } from '../api-utilities/VerifierInterface';
import { ScenarioHandler } from '../api-utilities/ScenarioHandler';
const router = express.Router();

export default function(QueryHandler) {
    router.put('/', async (req, res) => {
        var scenario = {};
        var idScenario = undefined;
        if (req.body.scenario != undefined) {
            idScenario = req.body.scenario;
            const scenarioBD = await QueryHandler.get(idScenario);
            scenario = scenarioBD.data();
        }
        const actor = req.body;
        const verifier = new VerifierInterface(scenario, 'actor');
        var response = verifier.check(actor);
        if (response == true) {
            const handler = new ScenarioHandler(scenario);
            delete actor.scenario;
            handler.pushAttribute(actor, 'actors');
            if (idScenario) {
                await QueryHandler.set(idScenario, handler.scenario);
            } else {
                await QueryHandler.add(handler.scenario);
            }
            res.send({code: 202, scenario: handler.scenario});
        }

        res.send({code: 400, error: response});
    });

    return router;
}