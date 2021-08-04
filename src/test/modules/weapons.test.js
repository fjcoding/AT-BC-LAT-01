import { Weapon } from '../../main/modules/Weapon.js';

import { weapons } from '../../main/modules/WeaponList.js';

describe('check if the constructor class buil weapons with name, power, xscope, and ycope', () => {
    test('passing name, power, xscope, and ycope to build a weapon', () => {
        const handgun = new Weapon('handGun', 1, 10, 1);
        expect(handgun.name).toBe('handGun');
        expect(handgun.power).toBe(1);
        expect(handgun.xScope).toBe(10);
        expect(handgun.yScope).toBe(1);
    });

    test('validate the creation of the weaponsList with the the objects, handgun, rifle and shotgun', ()=> {

        expect(typeof weapons.weaponList.handgun).toBe('object');
        expect(typeof weapons.weaponList.shotgun).toBe('object');
        expect(typeof weapons.weaponList.rifle).toBe('object');
        expect(weapons.weaponList.handgun.name).toBe('handGun');
        expect(weapons.weaponList.handgun.power).toBe(1);
        expect(weapons.weaponList.handgun.xScope).toBe(10);
        expect(weapons.weaponList.handgun.yScope).toBe(1);

    });
});