import { expect } from '@jest/globals';
import { Character } from '../character';

describe('Constructor of the character class', () => {
    it('should crate an instace of the class', () => {
        let character = new Character(1, 1, true, 'handGun', 'none', false);
        expect(typeof character._healthPoints).toBe('number');
        expect(typeof character._attackPoints).toBe('number');
        expect(typeof character._haveWeapon).toBe('boolean');
        expect(typeof character._gunType).toBe('string');
        expect(typeof character._onVehicle).toBe('boolean');
        expect(typeof character._vehicleType).toBe('string');
    });
});

