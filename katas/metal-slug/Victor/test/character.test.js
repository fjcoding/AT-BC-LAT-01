import { expect } from '@jest/globals';
import { Character } from '../character';

describe('Constructor of the character class', () => {
    it('should crate an instace of the class', () => {
        let character = new Character(1, 1, false, false);
        expect(typeof character._healthPoints).toBe('number');
        expect(typeof character._attackPoints).toBe('number');
        expect(typeof character._haveGun).toBe('boolean');
        expect(typeof character._onVehicle).toBe('boolean');
    });
});

