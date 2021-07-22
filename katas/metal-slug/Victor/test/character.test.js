import { expect } from '@jest/globals';
import { Character } from '../character';

describe('Constructor of the character class', () => {
    it('should crate an instace of the class', () => {
        let char1 = new Character(1, 1, false, false);
        expect(typeof char1._healthPoints).toBe('number');
        expect(typeof char1._attackPoints).toBe('number');
        expect(typeof char1._haveGun).toBe('boolean');
        expect(typeof char1._onVehicle).toBe('boolean');
    });
});

