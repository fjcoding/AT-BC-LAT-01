import { Soldier } from './soldier.js';
import { Weapon } from './weapon.js';

const alive = true;
const canHitOneTarget = false;
const dead = false;
const handgunAttackPower = 1;
const mainCharacterHitPoints = 1;
const machinegunAttackPower = 3;
const maxPossibleDamage = 65531;

test('Create a new soldier, equiped with Handgun', () => {
    const handgun = new Weapon('Handgun', handgunAttackPower, canHitOneTarget);
    const obj = new Soldier(handgun, 'Marco', mainCharacterHitPoints);
    expect(obj.isAlive()).toBe(alive);
});
test('Soldier gets a heavy machine gun', () => {
    const handgun = new Weapon('Handgun', handgunAttackPower, canHitOneTarget);
    const machinegun = new Weapon('Heavy Machine Gun', machinegunAttackPower, canHitOneTarget);
    const obj = new Soldier(handgun, 'Fio', mainCharacterHitPoints);
    obj.equipNewWeapon(machinegun);
    expect(obj.attackWithEquippedWeapon()).toBe(machinegunAttackPower);
});
test('Soldier takes massive damage', () => {
    const handgun = new Weapon('Handgun', handgunAttackPower, canHitOneTarget);
    const obj = new Soldier(handgun, 'Marco', mainCharacterHitPoints);
    obj.takeDamage(maxPossibleDamage); //soon to rise to test boundary values
    obj.takeDamage(handgunAttackPower);
    expect(obj.isAlive()).toBe(dead);
});
