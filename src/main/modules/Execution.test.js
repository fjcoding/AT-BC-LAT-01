import { Execution } from './Execution.js';

var parserActionssArray = [{'actionActor': 'Marco', 'actionType': 'Pick Weapon', 'element': 'Handgun'}, {'actionActor': 'Marco', 'actionType': 'Heal', 'element': 5}, {'actionActor': 'RAT1', 'actionType': 'Receive Attack', 'fromActor': 'Marco'}, {'actionActor': 'Marco', 'actionType': 'Shoot Weapon', 'element': 'Shotgun'}, {'actionActor': 'Marco', 'actionType': 'Receive Attack', 'element': 'RAS1'}, {'actionActor': 'RAS1', 'actionType': 'Receive Attack', 'element': 'Marco'}];
var parserActorssArray = [{'health': 10, 'name': 'Marco', 'type': 'PF Squad Soldier', 'weapon': 'Handgun'}, {'health': 2, 'name': 'RAS1', 'type': 'Rebel Army soldier', 'weapon': 'rifle'}, {'health': 2, 'name': 'RAT1', 'type': 'Rebel Army Tank', 'weapon': 'tank cannon'}];
const testExecution = new Execution ();
test('the execution need to give the respective result', () => {
    expect(testExecution.execute(parserActionssArray, parserActorssArray)).toEqual([{'health': 14, 'name': 'Marco', 'type': 'PF Squad Soldier', 'weapon': 'Handgun'}, {'health': 1, 'name': 'RAS1', 'type': 'Rebel Army soldier', 'weapon': 'rifle'}, {'health': 1, 'name': 'RAT1', 'type': 'Rebel Army Tank', 'weapon': 'tank cannon'}]);
});