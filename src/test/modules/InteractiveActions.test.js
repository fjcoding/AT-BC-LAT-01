import { InteractiveActions } from '../../main/modules/InteractiveActions.js';

var Marco = new Object();
Marco.name = 'Marco';
Marco.alias = 'PF Squad Soldier';
Marco.weapon = 'Handgun';
var RAS1 = new Object();
Marco.name = 'RAS1';
Marco.alias = 'Rebel Army Soldier';
Marco.weapon = 'Rifle';
var RAT1 = new Object();
Marco.name = 'RAT1';
Marco.alias = 'Rebel Army Tank';
Marco.weapon = 'Tank cannon';
var PickWeapon = new Object();
var receiveAttack = new Object();

test('Interactive actions instances need to be created with the correct values in their attributes', () => {
    expect(new InteractiveActions(RAS1, PickWeapon, Marco)).toEqual({'actionActor': RAS1, 'actionType': PickWeapon, 'target': Marco});
    expect(new InteractiveActions(RAT1, receiveAttack, Marco)).toEqual({'actionActor': RAT1, 'actionType': receiveAttack, 'target': Marco});
    expect(new InteractiveActions('RAT1', 'receiveAttack', 'Marco')).toEqual({'actionActor': 'RAT1', 'actionType': 'receiveAttack', 'target': 'Marco'});
});

const testclass = new InteractiveActions;

test('Methods getValue and setValue need to set and get the value expected in the correct attribute', () =>{
    expect(testclass.getactionActor()).toEqual(undefined);
    testclass.setactionActor(RAS1);
    expect(testclass.getactionActor()).toEqual(RAS1);
    expect(testclass.getactionType()).toEqual(undefined);
    testclass.setactionType(receiveAttack);
    expect(testclass.getactionType()).toEqual(receiveAttack);
    expect(testclass.getTarget()).toEqual(undefined);
    testclass.setTarget(Marco);
    expect(testclass.getTarget()).toEqual(Marco);
});
