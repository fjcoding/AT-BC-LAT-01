import { Soldier } from './soldier.js';
import { Weapon } from './weapon.js';

test('Create a new soldier, equiped with Handgun', () => {
    const handgunAttackPower = 1;
    const mainCharacterHitpoints = 1;
    const handgun = new Weapon('Handgun',handgunAttackPower,false);
    const obj = new Soldier(handgun,'Marco',mainCharacterHitpoints);
    expect(obj.isAlive()).toBe(true);
});
test('Soldier gets a machine gun', () => {
    const handgunAttackPower = 1;
    const machinegunAttackPower = 3;
    const mainCharacterHitpoints = 1;
    const handgun = new Weapon('Handgun',handgunAttackPower,false);
    const machinegun = new Weapon('Machine Gun',machinegunAttackPower, true);
    const obj = new Soldier(handgun,'Fio',mainCharacterHitpoints);
    obj.equipNewWeapon(machinegun);
    expect(obj.attackWithEquippedWeapon()).toBe(machinegunAttackPower);
});
/*
test('Plane takes damage from an enemy handgun', () => {
    return something;
});
test('Soldier takes massive damage', () => {
    return something;
});
test('Insert test description here xD', () => {
    return something;
});
*/