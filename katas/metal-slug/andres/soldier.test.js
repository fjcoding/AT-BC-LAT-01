import { Soldier } from './soldier.js';
import { Weapon } from './weapon.js';

<<<<<<< HEAD
<<<<<<< HEAD
const alive = true;
const canHitOneTarget = false;
const dead = false;
=======
const canHitOneTarget = false;
>>>>>>> 49da1c6 (Added method weapon.dealDamage() and test soldier takes massive damage)
const handgunAttackPower = 1;
const mainCharacterHitPoints = 1;
const machinegunAttackPower = 3;
const maxPossibleDamage = 65531; 
<<<<<<< HEAD
//const planeHitPoints = 4; //For use in test Plane takes damage

test('Create a new soldier, equiped with Handgun', () => {
    const handgun = new Weapon('Handgun',handgunAttackPower,canHitOneTarget);
    const obj = new Soldier(handgun,'Marco',mainCharacterHitPoints);
    expect(obj.isAlive()).toBe(alive);
});
test('Soldier gets a heavy machine gun', () => {
    const handgun = new Weapon('Handgun',handgunAttackPower,canHitOneTarget);
    const machinegun = new Weapon('Heavy Machine Gun',machinegunAttackPower, canHitOneTarget);
    const obj = new Soldier(handgun,'Fio',mainCharacterHitPoints);
=======
=======
//const planeHitPoints = 4; //For use in test Plain takes damage

>>>>>>> 49da1c6 (Added method weapon.dealDamage() and test soldier takes massive damage)
test('Create a new soldier, equiped with Handgun', () => {
    const handgun = new Weapon('Handgun',handgunAttackPower,canHitOneTarget);
    const obj = new Soldier(handgun,'Marco',mainCharacterHitPoints);
    expect(obj.isAlive()).toBe(true);
});
<<<<<<< HEAD
test('Soldier gets a machine gun', () => {
    const handgunAttackPower = 1;
    const machinegunAttackPower = 3;
    const mainCharacterHitpoints = 1;
    const handgun = new Weapon('Handgun',handgunAttackPower,false);
    const machinegun = new Weapon('Machine Gun',machinegunAttackPower, true);
    const obj = new Soldier(handgun,'Fio',mainCharacterHitpoints);
>>>>>>> 8a66b3c (Added soldier class, new soldier and equip tests)
=======
test('Soldier gets a heavy machine gun', () => {
    const handgun = new Weapon('Handgun',handgunAttackPower,canHitOneTarget);
    const machinegun = new Weapon('Heavy Machine Gun',machinegunAttackPower, canHitOneTarget);
    const obj = new Soldier(handgun,'Fio',mainCharacterHitPoints);
>>>>>>> 49da1c6 (Added method weapon.dealDamage() and test soldier takes massive damage)
    obj.equipNewWeapon(machinegun);
    expect(obj.attackWithEquippedWeapon()).toBe(machinegunAttackPower);
});
/*
<<<<<<< HEAD
test('Plane takes damage from an enemy handgun', () => {
<<<<<<< HEAD
    const handgun = new Weapon('Handgun',handgunAttackPower,canHitOneTarget);
    const machinegun = new Weapon('Heavy Machine Gun',machinegunAttackPower, canHitOneTarget);
    const damagedPlainHitPoints = planeHitPoints - machinegunAttackPower;
    const obj = new Soldier(machinegun,'Plane',planeHitPoints);
    obj.takeDamage(handgun.dealsDamage());
    expect(obj.currentHealth).toBe(damagedPlainHitPoints); //HELP! It receives 3 parameters. Needs a different matcher (or different logic)
});
*/
test('Soldier takes massive damage', () => {
    const handgun = new Weapon('Handgun',handgunAttackPower,canHitOneTarget);
    const obj = new Soldier(handgun,'Marco',mainCharacterHitPoints);
    obj.takeDamage(maxPossibleDamage); //soon to rise to test boundary values
    obj.takeDamage(handgunAttackPower);
    expect(obj.isAlive()).toBe(dead);
});
=======
    return something;
=======
test('Plain takes damage from an enemy handgun', () => {
    const handgun = new Weapon('Handgun',handgunAttackPower,canHitOneTarget);
    const machinegun = new Weapon('Heavy Machine Gun',machinegunAttackPower, canHitOneTarget);
    const damagedPlainHitPoints = planeHitPoints - machinegunAttackPower;
    //there's no weapon specified for vehicles, so I'm giving it a HMG
    const obj = new Soldier(machinegun,'Plain',planeHitPoints);
    obj.takeDamage(handgun.dealsDamage());
    expect(obj.currentHealth).toBe(damagedPlainHitPoints); //HELP! It receives 3 parameters. Needs a different matcher (or different logic)
>>>>>>> 49da1c6 (Added method weapon.dealDamage() and test soldier takes massive damage)
});
*/
test('Soldier takes massive damage', () => {
<<<<<<< HEAD
    return something;
});
test('Insert test description here xD', () => {
    return something;
});
*/
>>>>>>> 8a66b3c (Added soldier class, new soldier and equip tests)
=======
    const handgun = new Weapon('Handgun',handgunAttackPower,canHitOneTarget);
    const obj = new Soldier(handgun,'Marco',mainCharacterHitPoints);
    obj.takeDamage(maxPossibleDamage); //soon to rise to test boundary values
    obj.takeDamage(handgunAttackPower);
    expect(obj.isAlive()).toBe(false);
});
>>>>>>> 49da1c6 (Added method weapon.dealDamage() and test soldier takes massive damage)
