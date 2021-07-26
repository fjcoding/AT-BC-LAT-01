import { Civilian } from './civilian.js';
import { Weapon } from './weapon.js';
const canHitMultipleTargets = true;

test('create civilian carrying a Flame Shot', () => {
    const flameshotAttackPower = 5;
    const weapontoGive = new Weapon('Flame Shot', flameshotAttackPower, canHitMultipleTargets);
    const obj = new Civilian('Holi',weapontoGive);
    expect(obj.carriedItem.weaponName).toBe('Flame Shot');
});