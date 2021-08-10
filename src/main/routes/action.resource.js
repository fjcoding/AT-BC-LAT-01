import express from 'express';
import { VerifierInterface } from '../api-utilities/VerifierInterface';
import { ScenarioHandler } from './../api-utilities/ScenarioHandler';
import { Runner } from '../modules/Runner';

const router = express.Router();

export default function(QueryHandler) {
    router.put('/', async (req, res) => {
        if (!req.body.scenario) res.send({status: 400, error: 'No scenario specidied'});
        const idScenario = req.body.scenario;
        const action = req.body;

        const scenario = await QueryHandler.get(idScenario);
        if (scenario.data()) {
            const verifier = new VerifierInterface(scenario.data(), 'action');

            var response = verifier.check(action);
            if (response == true) {
                const handler = new ScenarioHandler(scenario.data());
                delete action.scenario;
                console.log(handler.scenario);
                handler.pushAttribute(action, 'actions');
                // console.log(handler.scenario);
                await QueryHandler.set(idScenario, handler.scenario);
                res.send({code: 202, scenario: handler.scenario});
            }

            res.send({code: 400, error: response});
        }
        res.send({status: 400, error: 'Scenario does not exist'});
    });

    //POST:scenarioID
    /*{
        "actor": "RAS1",
        "use": "weapon",
        "target": "west"
    }
    {
        "actor": "RAS2",
        "use": "weapon",
        "target": "west"
    }*/
    router.post('/:scenarioID', async (req, res) => {
        const scenarioID = req.params.scenarioID;
        const scenario = await QueryHandler.get(scenarioID);
        if (scenario.data()) {
            const verifier = new VerifierInterface(scenario.data(), 'action');
            if (verifier.check(req.body) == true) {
                const runner = new Runner();
                console.log(scenario.data().actors);
                console.log(req.body);
                const result = runner.follow(scenario.data().actors, [req.body]);
                res.send({ code: 202, result: result });
            }
            res.send({status: 400, error: verifier.check(req.body)});
        }
        res.send({status: 400, error: 'Scenario does not exist'});
    });

    return router;
}