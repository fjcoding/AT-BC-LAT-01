import { Soldier } from './soldier.js';
import { Weapon } from './weapon.js';

const canHitOneTarget = false;
const handgunAttackPower = 1;
const mainCharacterHitPoints = 1;
const machinegunAttackPower = 3;
const maxPossibleDamage = 65531; 
//const planeHitPoints = 4; //For use in test Plain takes damage

test('Create a new soldier, equiped with Handgun', () => {
    const handgun = new Weapon('Handgun',handgunAttackPower,canHitOneTarget);
    const obj = new Soldier(handgun,'Marco',mainCharacterHitPoints);
    expect(obj.isAlive()).toBe(true);
});
test('Soldier gets a heavy machine gun', () => {
    const handgun = new Weapon('Handgun',handgunAttackPower,canHitOneTarget);
    const machinegun = new Weapon('Heavy Machine Gun',machinegunAttackPower, canHitOneTarget);
    const obj = new Soldier(handgun,'Fio',mainCharacterHitPoints);
    obj.equipNewWeapon(machinegun);
    expect(obj.attackWithEquippedWeapon()).toBe(machinegunAttackPower);
});
/*
test('Plain takes damage from an enemy handgun', () => {
    const handgun = new Weapon('Handgun',handgunAttackPower,canHitOneTarget);
    const machinegun = new Weapon('Heavy Machine Gun',machinegunAttackPower, canHitOneTarget);
    const damagedPlainHitPoints = planeHitPoints - machinegunAttackPower;
    //there's no weapon specified for vehicles, so I'm giving it a HMG
    const obj = new Soldier(machinegun,'Plain',planeHitPoints);
    obj.takeDamage(handgun.dealsDamage());
    expect(obj.currentHealth).toBe(damagedPlainHitPoints); //HELP! It receives 3 parameters. Needs a different matcher (or different logic)
});
*/
test('Soldier takes massive damage', () => {
    const handgun = new Weapon('Handgun',handgunAttackPower,canHitOneTarget);
    const obj = new Soldier(handgun,'Marco',mainCharacterHitPoints);
    obj.takeDamage(maxPossibleDamage); //soon to rise to test boundary values
    obj.takeDamage(handgunAttackPower);
    expect(obj.isAlive()).toBe(false);
});