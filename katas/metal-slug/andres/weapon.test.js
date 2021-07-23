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
    const shotgunAttackPower = 5;
    const obj = new Weapon('Shotgun', shotgunAttackPower, true);
    expect(obj.weaponName).toBe('Shotgun');
    expect(obj.weaponAttackPower).toBe(shotgunAttackPower);
    expect(obj.weaponHitsMultiple).toBe(true);
<<<<<<< HEAD
>>>>>>> db0c81b (changed file format to LF in weapon.js and its test)
});
=======
});
>>>>>>> 8a66b3c (Added soldier class, new soldier and equip tests)
