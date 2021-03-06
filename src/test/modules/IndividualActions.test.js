import { IndividualActions } from '../../main/modules/IndividualActions.js';

var Marco = new Object();
Marco.name = 'Marco';
Marco.alias = 'PF Squad Soldier';
Marco.weapon = 'Handgun';
var PickWeapon = new Object();

test('Individual actions instances need to be created with the correct values in their attributes', () => {
    expect(new IndividualActions(Marco, PickWeapon)).toEqual({ 'actionActor': Marco, 'actionType': PickWeapon });
    expect(new IndividualActions('Marco', 'PickWeapon', 'Shotgun')).toEqual({ 'actionActor': 'Marco', 'actionType': 'PickWeapon', 'element': 'Shotgun' });
});

const testclass = new IndividualActions;

test('Methods getValue and setValue need to set and get the value expected in the correct attribute', () => {
    expect(testclass.getactionActor()).toEqual(undefined);
    testclass.setactionActor(Marco);
    expect(testclass.getactionActor()).toEqual(Marco);
    expect(testclass.getactionType()).toEqual(undefined);
    testclass.setactionType(PickWeapon);
    expect(testclass.getactionType()).toEqual(PickWeapon);
    expect(testclass.getElement()).toEqual(undefined);
    testclass.setElement('heavyMachineGun');
    expect(testclass.getElement()).toEqual('heavyMachineGun');
});