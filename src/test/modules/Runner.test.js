import { Runner } from '../../main/modules/Runner';

const mainTest = new Runner();

test('Obtain the results as an object called results with Actor name and the status, enemies do not survive', () => {
    var actorObjects = [
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

    var actionObjects = [
        {'actor': 'Marco', 'action': 'Shoot Weapon', 'target': 'east', 'scenes': 2},
        {'actor': 'Marco', 'action': 'Shoot Weapon', 'target': 'west', 'scenes': 2},
        {'actor': 'RAS1', 'action': 'Shoot Weapon', 'target': 'north', 'scenes': 3},
        {'actor': 'RAT1', 'action': 'Shoot Weapon', 'target': 'south', 'scenes': 11}];

    expect(mainTest.follow(actorObjects, actionObjects, 5)).toEqual(
        {
            'Marco': 'Alive',
            'RAS1': 'Dead',
            'RAT1': 'Dead'
        });
});

test('Obtain the results as an object called results with Actor name and the status, everyone survives', () => {
    var actorObjects = [
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
                'yPos': 10
            }}];

    var actionObjects = [
        {'actor': 'Marco', 'action': 'Shoot Weapon', 'target': 'east'},
        {'actor': 'Marco', 'action': 'Shoot Weapon', 'target': 'west'},
        {'actor': 'RAS1', 'action': 'Shoot Weapon', 'target': 'north'},
        {'actor': 'RAT1', 'action': 'Shoot Weapon', 'target': 'south'}];

    expect(mainTest.follow(actorObjects, actionObjects)).toEqual(
        {
            'Marco': 'Alive',
            'RAS1': 'Alive',
            'RAT1': 'Alive'
        });
});