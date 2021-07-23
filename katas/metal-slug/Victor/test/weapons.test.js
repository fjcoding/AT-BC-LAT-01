import { expect } from '@jest/globals';
import { Weapon } from '../weapons';

describe('Constructor of the weapon class', () => {
    it('should crate an instace of the class', () => {
        let weapon = new Weapon('handGun', 1, 8, false);
        expect(typeof weapon._name).toBe('string');
        expect(typeof weapon._attackPower).toBe('number');
        expect(typeof weapon._maxRange).toBe('number');
        expect(typeof weapon._sprdDamage).toBe('boolean');
    });
});
