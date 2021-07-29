import { Scenario } from './Scenario.js';
import { interactiveActions } from './interactiveActions.js';
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
    expect(testScenario.createActor(actorObjects)).toEqual([{'_actorName': 'Marco', '_actorType': 'Handgun', '_healthPoints': 'PF Squad Soldier', '_weaponType': undefined}, {'_actorName': 'RAS1', '_actorType': 'rifle', '_healthPoints': 'Rebel Army soldier', '_weaponType': undefined}, {'_actorName': 'RAT1', '_actorType': 'tank cannon', '_healthPoints': 'Rebel Army Tank', '_weaponType': undefined}]);
});
var PickShotgun = new interactiveActions();
var actionObjects = [{
    actor: 'Marco',
    action: PickShotgun
}, {
    actor: 'Marco',
    action: 'Shoot Weapon'
}, {
    actor: 'RAT1',
    action: 'receive attack',
    from: 'Marco'
}];
test('Actions need to be parsed correctly', () => {
    expect(new Scenario(1)).toEqual({'id': 1});
    expect(testScenario.createActions(actionObjects)).toEqual([{'actionActor': 'Marco', 'actionType': PickShotgun}, {'actionActor': 'Marco', 'actionType': 'Shoot Weapon'}, {'actionActor': 'RAT1', 'actionType': 'receive attack', 'fromActor': 'Marco'}]
    );
});

test('The response expected after the actions need to be the correct', () => {
    expect(new Scenario(1)).toEqual({'id': 1});
    /*expect(testScenario.executeScenario()).toEqual({'code': 202, "result": {
        "Marco": "alive",
        "RAS1": "death",
        "RAT1": "alive"}});*/
});