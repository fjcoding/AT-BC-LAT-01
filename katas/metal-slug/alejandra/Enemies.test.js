import { Alien, Mercenary } from './Enemies';
import { Soldier } from './Character';

describe('Enemies can recive damage', () => {
    test('Given a mercenary should receive the damage of 3 its health after damage should be 0 so it sould be death', () => {
        const mercenary = new Mercenary();
        mercenary.receiveDamage(3);
        expect(mercenary.isAlive()).toBe(false);
    });
    test('Given a alien should receive the damage of 2 its health after damage should be 0 so it sould be death', () => {
        const alien = new Alien();
        alien.receiveDamage(3);
        expect(alien.isAlive()).toBe(false);
    });
});

describe('Enemies have abilities', () => {
    test('Given a Mercenary it should be able to use a knife 3 times to kill a soldier (Because it has 3 lifes)', () => {
        const mercenary = new Mercenary();
        const soldier = new Soldier();
        mercenary.useKnife(soldier);
        mercenary.useKnife(soldier);
        mercenary.useKnife(soldier);
        expect(soldier.isAlive()).toBe(false);
    });
    test('Given a alien should be able to become invulnerable', () => {
        const alien = new Alien();
        alien.useInvulnerability();
        expect(alien.isInvulnerable).toBe(true);
    });
    test('Given a alien should be able to use its invulnerability when it gets damage its health sould remain in 2', () => {
        const alien = new Alien();
        alien.useInvulnerability();
        alien.receiveDamageInv(10);
        expect(alien.getHealth()).toBe(2);
    });
});
