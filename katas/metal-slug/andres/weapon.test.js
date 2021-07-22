import { Weapon } from './weapon.js';
<<<<<<< HEAD
const canHitOneTarget = false;
const canHitMultipleTargets = true;

test('create shotgun object successfully', () => {
    const shotgunAttackPower = 5;
    const obj = new Weapon('Shotgun', shotgunAttackPower, canHitMultipleTargets);
    expect(obj.weaponName).toBe('Shotgun');
    expect(obj.weaponAttackPower).toBe(shotgunAttackPower);
    expect(obj.weaponHitsMultiple).toBe(true);
});
test('rocket launcher deals damage', () => {
    const rocketLauncherAttackPower = 6;
    const obj = new Weapon('Rocket Launcher', rocketLauncherAttackPower, canHitOneTarget);
    expect(obj.dealsDamage()).toBe(rocketLauncherAttackPower);
=======

test('create shotgun object successfully', () => {
    const obj = new Weapon('Shotgun', 5, true);
    expect(obj.weaponName).toBe('Shotgun');
    expect(obj.weaponAttackPower).toBe(5);
    expect(obj.weaponHitsMultiple).toBe(true);
>>>>>>> db0c81b (changed file format to LF in weapon.js and its test)
});