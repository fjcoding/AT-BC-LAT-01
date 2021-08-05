import { Scenario } from '../../main/modules/Scenario.js';


const testScenario = new Scenario ();

test('The actors need to be parsed as new classes correctly into an array', () => {
    var actorObjects = [
        {name: 'Marco',
            type: 'PF Squad Soldier',
            weapon: 'Handgun',
            health: 2},
        {name: 'RAS1',
            type: 'Rebel Army soldier',
            weapon: 'rifle',
            health: 1},
        {name: 'RAT1',
            type: 'Rebel Army Tank',
            weapon: 'tank cannon',
            health: 3}];
    expect(testScenario.createActor(actorObjects)).toEqual([
        {'health': 2, 'name': 'Marco', 'type': 'PF Squad Soldier', 'weapon': 'Handgun'},
        {'health': 1, 'name': 'RAS1', 'type': 'Rebel Army soldier', 'weapon': 'rifle'},
        {'health': 3, 'name': 'RAT1', 'type': 'Rebel Army Tank', 'weapon': 'tank cannon'}]);
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
            target: 'Marco'}];
    expect(testScenario.createActions(actionObjects)).toEqual([
        {'actionActor': 'Marco', 'actionType': 'Pick Weapon', 'element': 'Shotgun'},
        {'actionActor': 'Marco', 'actionType': 'Shoot Weapon', 'element': 'Shotgun'},
        {'actionActor': 'RAT1', 'actionType': 'Receive Attack', 'target': 'Marco'}]
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