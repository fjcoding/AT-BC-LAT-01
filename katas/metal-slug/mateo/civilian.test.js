import { Civilian } from './civilian';
import { Weapon } from './weapon';

describe('A civilian', () => {
    test('A civilian drops a random weapon when he is rescued by the soldier', () => {
        const civilianInstance =  new Civilian();
        expect(civilianInstance.dropWeapon()).toBeInstanceOf(Weapon);
    });
});

