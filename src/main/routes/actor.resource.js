import express from 'express';
const router = express.Router();

//export default function(QueryHandler) {
export default function() {
    //PUT
    /*{
        "scenario": "exampleScenarioID",
        "name": "Marco",
        "type": "PF Squad Soldier",
        "health": 1,
        "weapon": {
            "name": "handgun",
            "power": 1,
            "xScope": 1,
            "yScope": 1
        },
        "position": {
            "xPos": 0,
            "yPos": 0
        }
    }*/
    router.put('/', (req, res) => {
        const scenarioID = req.body.scenario;
        const actorCreated = req.body.name;
        const result = {
            'code': 200,
            'actor': actorCreated,
            'scenario': scenarioID
        };
        res.send({ result });
    });

    return router;
}