import { Weapon } from './weapon.js';

test('create shotgun object successfully', () => {
    const obj = new Weapon('Shotgun', 5, true);
    expect(obj.weaponName).toBe('Shotgun');
    expect(obj.weaponAttackPower).toBe(5);
    expect(obj.weaponHitsMultiple).toBe(true);
});