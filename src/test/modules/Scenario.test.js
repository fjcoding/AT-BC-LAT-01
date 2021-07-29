import { Scenario } from '../../main/modules/Scenario.js';


const testScenario = new Scenario ();

test('The actors need to be parsed as new classes correctly into an array', () => {
    var actorObjects = [
        {name: 'Marco',
            type: 'PF Squad Soldier',
            weapon: 'Handgun'},
        {name: 'RAS1',
            type: 'Rebel Army soldier',
            weapon: 'rifle'},
        {name: 'RAT1',
            type: 'Rebel Army Tank',
            weapon: 'tank cannon'}];
    expect(testScenario.createActor(actorObjects)).toEqual([
        {'health': 2, 'name': 'Marco', 'type': 'PF Squad Soldier', 'weapon': 'Handgun'},
        {'health': 2, 'name': 'RAS1', 'type': 'Rebel Army soldier', 'weapon': 'rifle'},
        {'health': 2, 'name': 'RAT1', 'type': 'Rebel Army Tank', 'weapon': 'tank cannon'}]);
});

test('Actions need to be parsedas new classes correctly into an array', () => {
    var actionObjects = [
        {actor: 'Marco',
            action: 'Pick Weapon',
            element: 'Shotgun'},
        {actor: 'Marco',
            action: 'Shoot Weapon',
            element: 'Shotgun'},
        {actor: 'RAT1',
            action: 'Receive Attack',
            from: 'Marco'}];
    expect(testScenario.createActions(actionObjects)).toEqual([
        {'actionActor': 'Marco', 'actionType': 'Pick Weapon', 'element': 'Shotgun'},
        {'actionActor': 'Marco', 'actionType': 'Shoot Weapon', 'element': 'Shotgun'},
        {'actionActor': 'RAT1', 'actionType': 'Receive Attack', 'fromActor': 'Marco'}]
    );
});