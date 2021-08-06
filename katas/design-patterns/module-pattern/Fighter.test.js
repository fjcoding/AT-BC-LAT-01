import { Fighter } from './Fighter';

describe('Verify that Fighter', () => {
    const fighter = new Fighter()    ;
    test('can not get the health thorough the property', () => {
        expect(fighter.health.pointsOfHealth).toBe(undefined);
    });

    test('returns its health with a public method', () => {
        expect(fighter.health.get()).toBe(100);
    });

    test('reduces its health when receives an attack', () => {
        fighter.health.reduce(20);
        expect(fighter.health.get()).toBe(80);
    });

    test('can not change its pointOfHealth thorough the property', () => {
        fighter.health.pointsOfHealth = 200;
        expect(fighter.health.get()).toBe(80);
    });
});