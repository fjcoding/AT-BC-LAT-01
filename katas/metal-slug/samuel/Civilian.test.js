import { Civilian } from './Civilian';
import { Weapon } from './Weapons';

describe('A civilian instance', () => {
    test('when rescued should drop a random weapon', () => {
        const civilianInstance = new Civilian();
        expect(civilianInstance.dropWeapon()).toBeInstanceOf(Weapon);
    });
});