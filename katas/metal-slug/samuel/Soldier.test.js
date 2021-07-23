import { Soldier } from './Soldier';
import { Civilian } from './Civilian';
import { Enemy } from './Enemy';
import { RocketLauncher } from './Weapons';
import { Grenade } from './Weapons';
import { FlameShot } from './Weapons';
import { Shotgun } from './Weapons';

describe ('When a Soldier instance', () => {
    test ('changes weapon, his attackPower will increase', () => {
        const soldierInstance1 = new Soldier();
        const shotgunInstance = new Shotgun();
        expect(soldierInstance1.changeWeapon(shotgunInstance, soldierInstance1)).toEqual({
            resistance: 1,
            attackPower: 5,
            lifes: 3
        });
        const soldierInstance2 = new Soldier();
        const flameShotInstance = new FlameShot();
        expect(soldierInstance2.changeWeapon(flameShotInstance, soldierInstance2)).toEqual({
            resistance: 1,
            attackPower: 5,
            lifes: 3
        });
        const soldierInstance3 = new Soldier();
        const grenadeInstance = new Grenade();
        expect(soldierInstance3.changeWeapon(grenadeInstance, soldierInstance3)).toEqual({
            resistance: 1,
            attackPower: 10,
            lifes: 3
        });
        const soldierInstance4 = new Soldier();
        const rocketLauncherInstance = new RocketLauncher();
        expect(soldierInstance4.changeWeapon(rocketLauncherInstance, soldierInstance4)).toEqual({
            resistance: 1,
            attackPower: 4,
            lifes: 3
        });
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