import { expect } from '@jest/globals';
import { Enemy } from '../enemy.js';

describe('Constructor of the enemy class with default values', () => {
    it('should crate an instace of the class', () => {
        const enemy = new Enemy();
        expect(typeof enemy._healthPoints).toBe('number');
        expect(typeof enemy._enemyType).toBe('string');
        expect(typeof enemy._attackPoints).toBe('number');
        expect(typeof enemy._haveWeapon).toBe('boolean');
        expect(typeof enemy._gunType).toBe('string');
        expect(typeof enemy._onVehicle).toBe('boolean');
        expect(typeof enemy._vehicleType).toBe('string');
        expect(typeof enemy._abilityType).toBe('string');
    });
});
