import { expect } from '@jest/globals';
import { Soldier } from '../soldier.js';

describe('Constructor of the soldier class with default values', () => {
    it('should crate an instace of the class', () => {
        const soldier = new Soldier();
        expect(typeof soldier._healthPoints).toBe('number');
        expect(typeof soldier._lifePoints).toBe('number');
        expect(typeof soldier._attackPoints).toBe('number');
        expect(typeof soldier._haveGun).toBe('boolean');
        expect(typeof soldier._gunType).toBe('string');
        expect(typeof soldier._onVehicle).toBe('boolean');
        expect(typeof soldier._vehicleType).toBe('string');
        expect(typeof soldier._meleeWeapon).toBe('boolean');
        expect(typeof soldier._hasGranade).toBe('boolean');
    });
});
