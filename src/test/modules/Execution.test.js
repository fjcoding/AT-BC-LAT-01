import { Execution } from '../../main/modules/Execution.js';

var parserActionssArray = [
    {'actionActor': 'Marco', 'actionType': 'Shoot Weapon', 'target': 'east'},
    {'actionActor': 'Marco', 'actionType': 'Shoot Weapon', 'target': 'west'},
    {'actionActor': 'RAS1', 'actionType': 'Shoot Weapon', 'target': 'north'},
    {'actionActor': 'RAT1', 'actionType': 'Shoot Weapon', 'target': 'south'}];

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
            'yPos': 16
        }},
    {'health': 2,
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
            'yPos': 14
        }},
    {'health': 2,
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
    expect(testExecution.execute(parserActionssArray, parserActorssArray)).toEqual([
        {'health': 5,
            'name': 'Marco',
            'type': 'PF Squad Soldier',
            'weapon': {
                'name': 'handgun',
                'power': 1,
                'xScope': 1,
                'yScope': 1
            }, 'position': {
                'xPos': 1,
                'yPos': 16
            }},
        {'health': -9,
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
                'yPos': 14
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
                'xPos': 0,
                'yPos': 15
            }
        }]);
});