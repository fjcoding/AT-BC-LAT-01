import { Mercenary } from './Character';

describe('Characters can receive damage', () => {
    test('Given a Mercenary should receive the proper damage 2 its health after damage should be 1', () => {
        const mercenary = new Mercenary();
        mercenary.receiveDamage(2);
        expect(mercenary.getHealth()).toBe(1);
    });
    test('Given a Sodier should receive the proper damage 1 its health after damage should be 0 so it sould be death', () => {
        const mercenary = new Mercenary();
        mercenary.receiveDamage(3);
        expect(mercenary.isAlive()).toBe(false);
    });
});
