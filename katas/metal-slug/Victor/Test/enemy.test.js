import { expect } from '@jest/globals';
import { Enemy } from '../enemy.js';
import { weaponsList } from '../weaponList.js';

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
    it('Create an enemy with given values', () => {
        const enemySoldier = new Enemy(1, 'foot soldier', false, 'throwGranade', 'none', weaponsList._weaponType.handGun._attackPower, true, weaponsList._weaponType.handGun._name);
        expect(enemySoldier._healthPoints).toBe(1);
        expect(enemySoldier._attackPoints).toBe(1);
        expect(enemySoldier._haveWeapon).toBe(true);
        expect(enemySoldier._gunType).toBe('handGun');
        expect(enemySoldier._onVehicle).toBe(false);
        expect(enemySoldier._vehicleType).toBe('none');
        expect(enemySoldier._enemyType).toBe('foot soldier');
        expect(enemySoldier._abilityType).toBe('throwGranade');
    });
});
