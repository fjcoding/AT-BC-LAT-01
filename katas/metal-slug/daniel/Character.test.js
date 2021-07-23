import { Soldier } from './Character.js';
import { weapons } from './Weapon.js';
import { vehicles } from './Vehicle.js';

describe('Soldier is expected to equip', () => {
    const soldier = new Soldier;
    
    test('weapons', () => {
        expect( soldier.changeWeapon( weapons.shotgun ) ).toEqual( weapons.shotgun );
        expect( soldier.changeWeapon( weapons.heavyMachineGun ) ).toEqual( weapons.heavyMachineGun );
    });

    test('vehicles', () => {
        expect( soldier.equipVehicle( vehicles.tank ) ).toEqual( vehicles.tank );
        expect( soldier.equipVehicle( vehicles.camel ) ).toEqual( vehicles.camel );
        expect( soldier.equipVehicle() ).toEqual( undefined );
    });
});