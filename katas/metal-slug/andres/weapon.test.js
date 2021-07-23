import { Weapon } from './weapon.js';

test('create shotgun object successfully', () => {
    const shotgunAttackPower = 5;
    const obj = new Weapon('Shotgun', shotgunAttackPower, true);
    expect(obj.weaponName).toBe('Shotgun');
    expect(obj.weaponAttackPower).toBe(shotgunAttackPower);
    expect(obj.weaponHitsMultiple).toBe(true);
});
