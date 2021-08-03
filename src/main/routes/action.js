import express from 'express';
const router = express.Router();

//PUT
/*{
    "scenario": "exampleScenarioID",
    "actor": "Marco",
    "use": "weapon",
    "target": "east"
}*/
router.put('/', (req, res) => {
    const scenarioID = req.body.scenario;
    if (scenarioID) {
        //call the execution for GET/scenario:id
        const executedGetScenarioWithID = true;
        const result = {
            'Marco': 'alive',
            'RAS1': 'alive',
            'RAS2': 'death'
        };

        if (executedGetScenarioWithID) {
            res.send({ code: 202, result: result });
        }
    } else {
        res.send({ code: 400, error: 'Scenario ID is missing' });
    }
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

export default router;