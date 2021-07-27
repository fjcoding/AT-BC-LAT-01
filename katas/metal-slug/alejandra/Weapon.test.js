import { WeaponHitsMultiple, WeaponHitsOne } from './Weapon';
import { Soldier } from './Character';
/* weapons = [
    {
        Shotgun: { attackPower: 5, histMultiple: true },
        HeavyMachineGun: { attackPower: 2, histMultiple: false },
        RocketLauncher: { attackPower: 4, histMultiple: false },
        FlameShot: { attackPower: 5, histMultiple: true },
    },
];
*/

describe('Can assing the gun to a character', () => {
    test('Given a soldier assign a shotgun it should return the total attackPower of 6', () => {
        const soldier = new Soldier();
        const shotgunAttackPower = 5;
        const shotGun = new WeaponHitsMultiple(shotgunAttackPower);
        soldier.setWeapon(shotGun);
        expect(soldier.getAttackPower()).toBe(6);
    });
    test('Given a soldier assign a HeavyMachineGun it should return the total attackPower of 3', () => {
        const soldier = new Soldier();
        const hmgAttackPower = 2;
        const hmg = new WeaponHitsOne(hmgAttackPower);
        soldier.setWeapon(hmg);
        expect(soldier.getAttackPower()).toBe(3);
    });
});
