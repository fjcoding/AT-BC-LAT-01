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


describe('Soldier is expected to receive attack', () => {
    const soldier = new Soldier();

    test('without equiping a vehicle', () => {
        expect( soldier.receiveAttack( weapons.handgun ) ).toBe( 2 );
        expect( soldier.receiveAttack( weapons.shotgun ) ).toBe( 1 );
    });

    test('equiping a vehicle', () => {
        soldier.numOfLifes = 1;
        soldier.equipVehicle( vehicles.tank );
        expect( soldier.receiveAttack( weapons.handgun ) ).toBe( 1 );
        expect( soldier.receiveAttack( weapons.shotgun ) ).toBe( 1 );
    });

    test('when the number of lifes are 0', () => {
        soldier.numOfLifes = 0;
        expect( () => { soldier.receiveAttack( weapons.handgun ); } ).toThrow( Error );
    });
});


describe('Soldier is expected to destroy its vehicle', () => {
    const soldier = new Soldier;
    
    test('when receives an attack with the same power than the vehicles pointsOfHealth', ()=> {
        soldier.numOfLifes = 3;
        soldier.equipVehicle(vehicles.camel);
        soldier.receiveAttack( weapons.handgun );

        expect( soldier.numOfLifes ).toBe( 3 );
        expect( soldier.vehicle ).toEqual( undefined );
    });    

    test('when receives an attack with a greater power than the vehicles pointsOfHealth', ()=> {
        soldier.numOfLifes = 3;
        soldier.equipVehicle(vehicles.camel);
        soldier.receiveAttack( weapons.shotgun );

        expect( soldier.numOfLifes ).toBe( 3 );
        expect( soldier.vehicle ).toEqual( undefined );
    });    
});