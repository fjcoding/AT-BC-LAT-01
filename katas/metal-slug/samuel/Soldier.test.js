import { Soldier } from './Soldier';
import { Civilian } from './Civilian';
import { Enemy } from './Enemy';

describe ('Tests for class Soldier', () => {
    test ('The method changeWeapon have to give the new attackPower for the soldier', () => {
        const soldierInstance = new Soldier();
        expect(soldierInstance.changeWeapon(5)).toBe(6);
        expect(soldierInstance.changeWeapon(2)).toBe(3);
        expect(soldierInstance.changeWeapon(4)).toBe(5);
        expect(soldierInstance.changeWeapon(10)).toBe(11);
    });
    test ('The method useKnife() determine whether is an enemy or a civilian, and return if is an attack or you\'re freeing a civilian', () => {
        const soldierInstance = new Soldier();
        const civilianInstance = new Civilian;
        const enemyInstance = new Enemy();
        expect(soldierInstance.useKnife(civilianInstance)).toBe('Rescued');
        expect(soldierInstance.useKnife(enemyInstance)).toBe('Attack');
        expect(soldierInstance.useKnife(5)).toBe('Can\'t use');
    });
});