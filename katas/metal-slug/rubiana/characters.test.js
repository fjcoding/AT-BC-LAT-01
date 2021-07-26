import { Soldier } from './characters.js';
import { Vehicle } from './utilities.js';
import { Weapon } from './utilities.js';

const soldado = new Soldier();
const plane = new Vehicle('Plane', 4);
const shotgun = new Weapon('Shotgun', 5);


test('isAlive() return true if characters health is bigger than 0', () => {
    expect(soldado.isAlive()).toBe(true);
});

test('useVehicle() adds the vehicle to the character and increase its health with the vehicles health points', () => {
    soldado.useVehicle(plane.vehicle, plane.vehicleHealth);
    expect(soldado.vehicle).toBe('Plane');
});

test('useWeapon() adds the weapon to the character and increase its attack power with the weapons attack power', () => {
    soldado.useWeapon(shotgun.weapon, shotgun.attackPower);
    expect(soldado.weapon).toBe('Shotgun');
});