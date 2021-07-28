import { Scenario } from './Scenario.js';
var actorObjects = [{
    name: 'Marco',
    type: 'PF Squad Soldier',
    weapon: 'Handgun'
}, {
    name: 'RAS1',
    type: 'Rebel Army soldier',
    weapon: 'rifle'
}, {
    name: 'RAT1',
    type: 'Rebel Army Tank',
    weapon: 'tank cannon'
}];
const testScenario = new Scenario (1);
test('Individual actions need to be initialized correctly', () => {
    expect(new Scenario(1)).toEqual({'id': 1});
    expect(testScenario.createActor(actorObjects)).toEqual({'actionActor': 'Marco', 'actionType': 'PickWeapon'});
});