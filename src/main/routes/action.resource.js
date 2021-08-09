import express from 'express';
import { VerifierInterface } from '../api-utilities/VerifierInterface';
import { ScenarioHandler } from './../api-utilities/ScenarioHandler';

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
                        handler.pushAttribute(action, 'action');
                        QueryHandler.set(idScenario, handler.scenario);
                        res.send({code: 202, scenario: handler.scenario});
                    }
            
                    res.send({code: 400, error: response});
        }

        res.send({status: 400, error: 'Scenario does not exist'})
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
    router.post('/:scenarioID', (req, res) => {
        const scenarioID = req.params.scenarioID;
        const actorTakingAction = req.body.actor;
        if (scenarioID) {
            //call the execution for GET/scenario:id
            var soldierSituation;
            if (actorTakingAction == 'RAS1') {
                soldierSituation = 'alive';
            } else if (actorTakingAction == 'RAS2') {
                soldierSituation = 'death';
            }

            const result = {
                'Marco': soldierSituation,
                'RAS1': 'alive',
                'RAS2': 'death'
            };

            res.send({ code: 202, result: result });
        } else {
            res.send({ code: 400, error: 'Scenario ID does not exists' });
        }
    });

    return router;
}