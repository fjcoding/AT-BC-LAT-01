import { expect } from '@jest/globals';
import { Soldier } from '../soldier.js';
import { weaponsList } from '../weaponList.js';

describe('Constructor of the soldier class with default values', () => {
    it('should crate an instace of the class', () => {
        const soldier = new Soldier();
        expect(typeof soldier._healthPoints).toBe('number');
        expect(typeof soldier._lifePoints).toBe('number');
        expect(typeof soldier._attackPoints).toBe('number');
        expect(typeof soldier._haveWeapon).toBe('boolean');
        expect(typeof soldier._gunType).toBe('string');
        expect(typeof soldier._onVehicle).toBe('boolean');
        expect(typeof soldier._vehicleType).toBe('string');
    });

    it('Create a soldier with given values', () => {
        const marco = new Soldier(3, 3, false, 'none', weaponsList._weaponType.handGun._attackPower, true, weaponsList._weaponType.handGun._name);
        expect(marco._healthPoints).toBe(3);
        expect(marco._attackPoints).toBe(1);
        expect(marco._haveWeapon).toBe(true);
        expect(marco._vehicleType).toBe('none');
        expect(marco._gunType).toBe('handGun');
        expect(marco._onVehicle).toBe(false);
        expect(marco._lifePoints).toBe(3);
    });


});
