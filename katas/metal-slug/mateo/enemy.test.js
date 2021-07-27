import { Enemy } from './enemy';
import { Alien } from './enemy';
import { Mercenary } from './enemy';
import { Boss } from './enemy';
import { Soldier } from './soldier';

describe ('an enemy instance', () => {
    test('when the soldier shot an enemy he gets damage and if his health is lower than 0, he dies', () => {
        const enemyInstance = new Enemy;
        const soldier = new Soldier;
        expect(enemyInstance.getDamage(soldier.atackDamage)).toEqual('Enemy is dead');
    });

    test('when the soldier shot an alien he gets damage and if his health is lower than 0, he dies', () => {
        const alienInstance = new Alien;
        const soldier = new Soldier;
        expect(alienInstance.getDamage(soldier.atackDamage)).toEqual('Enemy is dead');
    });

    test('when the soldier shot a mercenary he gets damage and if his health is lower than 0, he dies', () => {
        const mercenaryInstance = new Mercenary;
        const soldier = new Soldier;
        expect(mercenaryInstance.getDamage(soldier.atackDamage)).toEqual('the health of the enemy is: ' + 2);
    });

    test('when the soldier shot a boss he gets damage and if his health is lower than 0, he dies', () => {
        const bossInstance = new Boss;
        const soldier = new Soldier;
        expect(bossInstance.getDamage(soldier.atackDamage)).toEqual('the health of the enemy is: ' + 9);
    });
});