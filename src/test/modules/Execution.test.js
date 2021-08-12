import { Execution } from '../../main/modules/Execution.js';

var parserActionssArray = [
    {'actionActor': 'Marco', 'actionType': 'Shoot Weapon', 'target': 'east', 'scenes': 2},
    {'actionActor': 'Marco', 'actionType': 'Shoot Weapon', 'target': 'west', 'scenes': 2},
    {'actionActor': 'RAS1', 'actionType': 'Shoot Weapon', 'target': 'north', 'scenes': 3},
    {'actionActor': 'RAT1', 'actionType': 'Shoot Weapon', 'target': 'south', 'scenes': 11},
    {'actionActor': 'RAT1', 'actionType': 'Shoot Weapon', 'target': 'east', 'scenes': 10},
    {'actionActor': 'RAT1', 'actionType': 'Shoot Weapon', 'target': 'west', 'scenes': 10},
    {}
];

var parserActorssArray = [
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
            'xPos': 0,
            'yPos': 15
        }}];

const testExecution = new Execution ();
test('The execution of scenario need to return the actual status of the actors instances after actions being executed', () => {
    expect(testExecution.execute(parserActionssArray, parserActorssArray, 18)).toEqual([
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
        {'health': 0,
            'name': 'RAT1',
            'type': 'Rebel Army Tank',
            'weapon': {
                'name': 'Rocket Launcher',
                'power': 10,
                'xScope': 10,
                'yScope': 10
            }, 'position': {
                'xPos': 0,
                'yPos': 15
            }
        }]);
});
