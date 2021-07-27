import { Soldier } from './soldier';
import { Vehicle } from './vehicle';
import { Weapon } from './weapon';
import { Alien } from './enemy';

describe('the soldier instance', () => {
    test('the newWeapon gives an increment of the atack damage of the soldier after he gets it', () => {
        const shotGun = new Weapon(5, 'multiple');
        const soldierInstance = new Soldier();
        expect(soldierInstance.newWeapon(shotGun, soldierInstance)).toEqual({
            health: 1, atackDamage: 6, lifes: 3
        });
        const soldierInstance2 = new Soldier;
        const heavyMachineGun = new Weapon(2, 'single');
        expect(soldierInstance2.newWeapon(heavyMachineGun, soldierInstance2)).toEqual({
            health: 1, atackDamage: 3, lifes: 3
        });
        const soldierInstance3 = new Soldier;
        const rocketLauncher = new Weapon(4, 'single');
        expect(soldierInstance3.newWeapon(rocketLauncher, soldierInstance3)).toEqual({
            health: 1, atackDamage: 5, lifes: 3
        });
        const soldierInstance4 = new Soldier;
        const flameGun = new Weapon(5, 'multiple');
        expect(soldierInstance4.newWeapon(flameGun, soldierInstance4)).toEqual({
            health: 1, atackDamage: 6, lifes: 3
        });
    });

    test('the newVehicle gives an aditional health for the soldier after he gets it', () => {
        const tank = new Vehicle(3);
        const soldierInstance = new Soldier();
        expect(soldierInstance.newVehicle(tank, soldierInstance)).toEqual({
            health: 4, atackDamage: 1, lifes: 3
        });
        const soldierInstance2 = new Soldier;
        const plane = new Vehicle(4);
        expect(soldierInstance2.newVehicle(plane, soldierInstance2)).toEqual({
            health: 5, atackDamage: 1, lifes: 3
        });
        const soldierInstance3 = new Soldier;
        const camel = new Vehicle(1);
        expect(soldierInstance3.newVehicle(camel, soldierInstance3)).toEqual({
            health: 2, atackDamage: 1, lifes: 3
        });
        const soldierInstance4 = new Soldier;
        const submarine = new Vehicle(3);
        expect(soldierInstance4.newVehicle(submarine, soldierInstance4)).toEqual({
            health: 4, atackDamage: 1, lifes: 3
        });
    });

    test('when the soldier got damage his health goes low and if he dont have healt, he loses a life', () => {
        const soldierInstance = new Soldier;
        const alien = new Alien;
        expect(soldierInstance.getDamage(alien.atackDamage)).toEqual('the soldier has ' + 2 + ' lifes and he has ' + 1 + ' points of health');
        expect(soldierInstance.getDamage(alien.atackDamage)).toEqual('the soldier has ' + 1 + ' lifes and he has ' + 1 + ' points of health');
        expect(soldierInstance.getDamage(alien.atackDamage)).toEqual('Game over');
    });

    test('If the soldier have a vehicle he wont die with the damage', () => {
        const soldierInstance = new Soldier;
        const tank = new Vehicle(3);
        soldierInstance.newVehicle(tank, soldierInstance);
        const alien = new Alien;
        expect(soldierInstance.getDamage(alien.atackDamage)).toEqual('the soldier has ' + 3 + ' lifes and he has ' + 1 + ' points of health');
    });
});