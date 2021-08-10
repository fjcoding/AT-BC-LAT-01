import express from 'express';
import { VerifierInterface } from '../api-utilities/VerifierInterface';
import { ScenarioHandler } from '../api-utilities/ScenarioHandler';
const router = express.Router();

export default function(QueryHandler) {
    //POST
    /*{
        "scenario": "exampleScenarioID",
        "actor": "Marco",
        "name": "shotgun",
        "power": 10,
        "xScope": 10,
        "yScope": 5
    }*/
    router.post('/', async (req, res) => {
        if (!req.body.scenario) res.send({status: 400, error: 'No scenario specidied'});
        const idScenario = req.body.scenario;
        const weapon = req.body;

        const scenario = await QueryHandler.get(idScenario);
        if (scenario.data()) {
            const verifier = new VerifierInterface(scenario.data(), 'weapon');
            console.log(scenario.data());
            var response = verifier.check(weapon);
            if (response == true) {
                const handler = new ScenarioHandler(scenario.data());
                const actor = weapon.actor;
                delete weapon.scenario;
                delete weapon.actor;
                handler.replaceWeapon(weapon, actor);
                await QueryHandler.set(idScenario, handler.scenario);
                res.send({code: 202, scenario: handler.scenario});
            }

            res.send({code: 400, error: response});
        }
        res.send({status: 400, error: 'Scenario does not exist'});
    });

    return router;
}