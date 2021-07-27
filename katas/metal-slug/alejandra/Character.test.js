import { Soldier } from './Character';
import { WeaponHitsMultiple } from './Weapon';
import { Alien, Mercenary } from './Enemies';

describe('Character can receive damage', () => {
    test('Given a soldier should receive the proper damage 2 its health after damage should be 1', () => {
        const soldier = new Soldier();
        soldier.receiveDamage(2);
        expect(soldier.getHealth()).toBe(1);
    });
    test('Given a soldier should receive the damage and die but its lifes should decrement and be 2', () => {
        const soldier = new Soldier();
        soldier.receiveDamage(1);
        expect(soldier.getLifes()).toBe(2);
    });
    test('Given a soldier should receive the damage and die but its lifes should decrement and its new health should be 1', () => {
        const soldier = new Soldier();
        soldier.receiveDamage(1);
        expect(soldier.getHealth()).toBe(1);
    });
    test('Given a soldier should receive the damage and die but its lifes should decrement, if it gets out of lifes should die', () => {
        const soldier = new Soldier();
        soldier.receiveDamage(1);
        soldier.receiveDamage(1);
        soldier.receiveDamage(1);
        soldier.receiveDamage(1);
        expect(soldier.isAlive()).toBe(false);
    });
});

describe('Soldier can use abilities', () => {
    test('Given a soldier and a weapon (shotgun) that can shot multiple enemies and make damage', () => {
        const soldier = new Soldier();
        const enemies = [new Alien(), new Mercenary()];
        const shotgunAttackPower = 5;
        const shotGun = new WeaponHitsMultiple(shotgunAttackPower);
        soldier.setWeapon(shotGun);
        soldier.shot(enemies);
        expect(enemies[0].isAlive()).toBe(false);
    });
    test('Given a soldier can throw granades to multiple enemies', () => {
        const soldier = new Soldier();
        const enemies = [new Alien(), new Mercenary()];
        soldier.throwGrenade(enemies);
        expect(enemies[0].isAlive()).toBe(false);
    });
});
