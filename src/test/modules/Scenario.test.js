import { Scenario } from '../../main/modules/Scenario.js';


const testScenario = new Scenario ();

test('Scenes number need to be added as a numeric attribute in Scenario class', () =>{
    expect(testScenario.setScenes(2)).toEqual(2);
});
test('The actors need to be parsed as new classes correctly into an array', () => {
    var actorObjects = [
        {
            'name': 'Marco',
            'type': 'PF Squad Soldier',
            'health': 1,
            'weapon': {
                'name': 'shotgun',
                'power': 10,
                'xScope': 10,
                'yScope': 5,
            },
            'position': {
                'xPos': 0,
                'yPos': 0
            }
        }, {
            'name': 'RAS1',
            'type': 'Rebel Army Soldier',
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
            'type': 'Rebel Army Soldier',
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
            }}];
    expect(testScenario.createActor(actorObjects)).toEqual([
        {'health': 1, 'name': 'Marco', 'type': 'PF Squad Soldier', 'weapon': {
            'name': 'shotgun',
            'power': 10,
            'xScope': 10,
            'yScope': 5,
        },
        'position': {
            'xPos': 0,
            'yPos': 0
        }},
        {'health': 1, 'name': 'RAS1', 'type': 'Rebel Army Soldier', 'weapon': {
            'name': 'rifle',
            'power': 1,
            'xScope': 1,
            'yScope': 1
        },
        'position': {
            'xPos': 100,
            'yPos': 0
        }},
        {'health': 1, 'name': 'RAS2', 'type': 'Rebel Army Soldier', 'weapon': {
            'name': 'rifle',
            'power': 1,
            'xScope': 1,
            'yScope': 1
        },
        'position': {
            'xPos': 5,
            'yPos': 5
        }}]);
});

test('Actions need to be parsedas new classes correctly into a new array separately depending if they are individual or interactive actions', () => {
    var actionObjects = [
        {actor: 'Marco',
            action: 'Pick Weapon',
            element: 'Shotgun'},
        {actor: 'Marco',
            action: 'Shoot Weapon',
            element: 'Shotgun'},
        {actor: 'RAT1',
            action: 'Receive Attack',
            target: 'Marco',
            scenes: 3}];
    expect(testScenario.createActions(actionObjects)).toEqual([
        {'actionActor': 'Marco', 'actionType': 'Pick Weapon', 'element': 'Shotgun'},
        {'actionActor': 'Marco', 'actionType': 'Shoot Weapon', 'element': 'Shotgun'},
        {'actionActor': 'RAT1', 'actionType': 'Receive Attack', 'target': 'Marco', 'scenes': 3}]
    );
});
test('Actions need to be parsed as new instances correctly into an array without action "from" attribute in the Object', () => {
    var actionObjects = [
        {actor: 'Marco',
            action: 'Pick Weapon',
            element: 'Shotgun'},
        {actor: 'Marco',
            action: 'Shoot Weapon',
            element: 'Shotgun'},
        {actor: 'RAT1',
            action: 'Walk',
            element: 'Tank'}];
    expect(testScenario.createActions(actionObjects)).toEqual([
        {'actionActor': 'Marco', 'actionType': 'Pick Weapon', 'element': 'Shotgun'},
        {'actionActor': 'Marco', 'actionType': 'Shoot Weapon', 'element': 'Shotgun'},
        {'actionActor': 'RAT1', 'actionType': 'Walk', 'element': 'Tank'}]
    );
});