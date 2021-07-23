import { Soldier } from './Soldier';
import { Civilian } from './Civilian';
import { Enemy } from './Enemy';

describe ('When a Soldier instance', () => {
    test ('changes weapon, his attackPower will increase', () => {
        const soldierInstance = new Soldier();
        expect(soldierInstance.changeWeapon(5)).toBe(6);
        expect(soldierInstance.changeWeapon(2)).toBe(3);
        expect(soldierInstance.changeWeapon(4)).toBe(5);
        expect(soldierInstance.changeWeapon(10)).toBe(11);
    });
    test ('use a knife, the action will change depending on the object', () => {
        const soldierInstance = new Soldier();
        const civilianInstance = new Civilian;
        const enemyInstance = new Enemy();
        expect(soldierInstance.useKnife(civilianInstance)).toBe('Rescued');
        expect(soldierInstance.useKnife(enemyInstance)).toBe('Attack');
        expect(soldierInstance.useKnife(5)).toBe('Can\'t use');
    });
});