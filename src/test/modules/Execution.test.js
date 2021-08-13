import { Execution } from '../../main/modules/Execution.js';

var actionsArray = [
    {'actionActor': 'Marco', 'actionType': 'Shoot Weapon', 'target': 'east', 'scenes': 4},
    {'actionActor': 'Marco', 'actionType': 'Shoot Weapon', 'target': 'west', 'scenes': 5},
    {'actionActor': 'RAS1', 'actionType': 'Shoot Weapon', 'target': 'north', 'scenes': 2},
    {'actionActor': 'RAT1', 'actionType': 'Shoot Weapon', 'target': 'south', 'scenes': 11},
    {'actionActor': 'RAS1', 'actionType': 'Shoot Weapon', 'target': 'east', 'scenes': 5},
    {'actionActor': 'RAT1', 'actionType': 'Shoot Weapon', 'target': 'west', 'scenes': 5},
    {}
];

var actorsArray = [
    {'health': 10,
        'name': 'Marco',
        'type': 'PF Squad Soldier',
        'weapon': {
            'name': 'handgun',
            'power': 1,
            'xScope': 1,
            'yScope': 1
        },
        'position': {
            'xPos': 1,
            'yPos': 5
        }},
    {'health': 21,
        'name': 'RAS1',
        'type': 'Rebel Army Soldier',
        'weapon': {
            'name': 'shotgun',
            'power': 5,
            'xScope': 2,
            'yScope': 2
        },
        'position': {
            'xPos': 2,
            'yPos': 13
        }},
    {'health': 6,
        'name': 'RAT1',
        'type': 'Rebel Army Tank',
        'weapon': {
            'name': 'Rocket Launcher',
            'power': 10,
            'xScope': 10,
            'yScope': 10
        }, 'position': {
            'xPos': 10,
            'yPos': 15
        }}];

const testExecution = new Execution ();
test('The execution of scenario need to return the actual status of the actors instances after actions being executed, all actions are executed after 5 scene, using a minor value in Execution scenes attributes will return an unexpected value in health for RAT1', () => {
    expect(testExecution.execute(actionsArray, actorsArray, 5)).toEqual([
        {'health': -10,
            'name': 'Marco',
            'type': 'PF Squad Soldier',
            'weapon': {
                'name': 'handgun',
                'power': 1,
                'xScope': 1,
                'yScope': 1
            }, 'position': {
                'xPos': 1,
                'yPos': 5
            }},
        {'health': 0,
            'name': 'RAS1',
            'type': 'Rebel Army Soldier',
            'weapon': {
                'name': 'shotgun',
                'power': 5,
                'xScope': 2,
                'yScope': 2
            },
            'position': {
                'xPos': 2,
                'yPos': 13
            }},
        {'health': -4,
            'name': 'RAT1',
            'type': 'Rebel Army Tank',
            'weapon': {
                'name': 'Rocket Launcher',
                'power': 10,
                'xScope': 10,
                'yScope': 10
            }, 'position': {
                'xPos': 10,
                'yPos': 15
            }
        }]);
});