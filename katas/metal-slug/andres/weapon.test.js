import { Weapon } from './weapon.js';
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
});