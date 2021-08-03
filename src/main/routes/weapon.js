import express from 'express';
const router = express.Router();

//POST
/*{
    "scenario": "exampleScenarioID",
    "actor": "Marco",
    "name": "shotgun",
    "power": 10,
    "xScope": 10,
    "yScope": 5
}*/
router.post('/', (req, res) => {
    const scenarioID = req.body.scenario;
    const existingActor = req.body.actor;
    const newGun = req.body.name;
    const newPower = req.body.power;
    const newXscope = req.body.xScope;
    const newYscope = req.body.yScope;
    const actorExists = true;
    const result = {
        scenario: scenarioID,
        actors: [{
            'name': existingActor,
            'type': 'PF Squad Soldier',
            'health': 1,
            'weapon': {
                'name': newGun,
                'power': newPower,
                'xScope': newXscope,
                'yScope': newYscope,
            },
            'position': {
                'xPos': 0,
                'yPos': 0
            }
        }, {
            'name': 'RAS1',
            'type': 'Rebel Army soldier',
            'health': 1,
            'weapon': {
                'name': 'rifle',
                'power': 1,
                'xScope': 1,
                'yScope': 1
            },
            'position': {
                'xPos': 100,
                'yPos': 0
            }
        }, {
            'name': 'RAS2',
            'type': 'Rebel Army soldier',
            'health': 1,
            'weapon': {
                'name': 'rifle',
                'power': 1,
                'xScope': 1,
                'yScope': 1
            },
            'position': {
                'xPos': 5,
                'yPos': 5
            }
        }]
    };

    if (actorExists) {
        res.send({ result });
    } else {
        res.send({ code: 400, error: 'Actor does not exists' });
    }
});

export default router;