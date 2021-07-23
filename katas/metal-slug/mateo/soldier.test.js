import { Soldier } from './soldier';
import { Vehicle } from './vehicle';
import { Weapon } from './weapon';

describe('this test is for soldier class', () => {
    test('the newWeapon gives and increment of the atack damage of the soldier after he gets it', () => {
        const shotGun = new Weapon(5, 'multiple');
        const heavyMachineGun = new Weapon(2, 'single');
        const rocketLauncher = new Weapon(4, 'single');
        const flameGun = new Weapon(5, 'multiple');
        const soldierInstance = new Soldier();
        expect(soldierInstance.newWeapon(shotGun.atackDamage)).toBe(6);
        expect(soldierInstance.newWeapon(heavyMachineGun.atackDamage)).toBe(3);
        expect(soldierInstance.newWeapon(rocketLauncher.atackDamage)).toBe(5);
        expect(soldierInstance.newWeapon(flameGun.atackDamage)).toBe(6);
    });
    
    test('the newVehicle gives an aditional health for the soldier after he gets it', () => {
        const tank = new Vehicle(3);
        const plain = new Vehicle(4);
        const camel = new Vehicle(1);
        const submarine = new Vehicle(3);
        const soldierInstance = new Soldier();
        expect(soldierInstance.newVehicle(tank.aditionalHealth)).toBe(4);
        expect(soldierInstance.newVehicle(plain.aditionalHealth)).toBe(5);
        expect(soldierInstance.newVehicle(camel.aditionalHealth)).toBe(2);
        expect(soldierInstance.newVehicle(submarine.aditionalHealth)).toBe(4);
    });
});