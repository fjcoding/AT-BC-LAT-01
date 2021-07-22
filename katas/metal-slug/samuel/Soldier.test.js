import { Soldier } from './Soldier';

describe ('Tests for class Soldier', () => {
    test('The method changeWeapon have to give the new attackPower for the soldier', () => {
        const soldierInstance = new Soldier();
        expect(soldierInstance.changeWeapon(5)).toBe(6);
        expect(soldierInstance.changeWeapon(2)).toBe(3);
        expect(soldierInstance.changeWeapon(4)).toBe(5);
        expect(soldierInstance.changeWeapon(10)).toBe(11);
    });
});