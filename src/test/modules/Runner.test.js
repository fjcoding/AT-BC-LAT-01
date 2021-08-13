import { Runner } from '../../main/modules/Runner';

const mainTest = new Runner();

test('Obtain the results as an object called results with Actor name and the status, enemies do not survive, because they are just 1 space from the main actor, and the scenes are 2 or more', () => {
    var actorObjects = [
        {'health': 10,
            'name': 'Marco',
            'type': 'PF Squad Soldier',
            'weapon': {
                'name': 'handgun',
                'power': 2,
                'xRange': 1,
                'yRange': 1
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
                'xRange': 2,
                'yRange': 2
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
                'xRange': 10,
                'yRange': 10
            }, 'position': {
                'xPos': 0,
                'yPos': 15
            }}];

    var actionObjects = [
        {'actor': 'Marco', 'action': 'Shoot Weapon', 'target': 'east', 'scenes': 1},
        {'actor': 'Marco', 'action': 'Shoot Weapon', 'target': 'west', 'scenes': 1},
        {'actor': 'RAS1', 'action': 'Shoot Weapon', 'target': 'north', 'scenes': 1},
        {'actor': 'RAT1', 'action': 'Shoot Weapon', 'target': 'south', 'scenes': 1}];

    expect(mainTest.follow(actorObjects, actionObjects, 2)).toEqual(
        {
            'Marco': 'Alive',
            'RAS1': 'Dead',
            'RAT1': 'Dead'
        });
});

test('Obtain the results as an object called results with Actor name and the status, everybody survives because the Runner has just 1 scene, and none action is executed', () => {
    const mainTest1 = new Runner();
    var actorObjects = [
        {'health': 10,
            'name': 'Marco',
            'type': 'PF Squad Soldier',
            'weapon': {
                'name': 'handgun',
                'power': 2,
                'xRange': 1,
                'yRange': 1
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
                'xRange': 2,
                'yRange': 2
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
                'xRange': 10,
                'yRange': 10
            }, 'position': {
                'xPos': 0,
                'yPos': 15
            }}];

    var actionObjects = [
        {'actor': 'Marco', 'action': 'Shoot Weapon', 'target': 'east', 'scenes': 2},
        {'actor': 'Marco', 'action': 'Shoot Weapon', 'target': 'west', 'scenes': 2},
        {'actor': 'RAS1', 'action': 'Shoot Weapon', 'target': 'north', 'scenes': 2},
        {'actor': 'RAT1', 'action': 'Shoot Weapon', 'target': 'south', 'scenes': 2}];

    expect(mainTest1.follow(actorObjects, actionObjects, 1)).toEqual(
        {
            'Marco': 'Alive',
            'RAS1': 'Alive',
            'RAT1': 'Alive'
        });
});