import { Enemy } from './characters.js';
import { Vehicle } from './utilities.js';
import { Weapon } from './utilities.js';

const inimigo = new Enemy(1, 1, 1, false);
const inimigoChefe = new Enemy(1, 1, 1, true);
const tank = new Vehicle('Tank', 3);
const heavyMachine = new Weapon('Heavy Machine', 2);


test('isAlive() return true if characters health is bigger than 0', () => {
    expect(inimigo.isAlive()).toBe(true);
});

test('useWeapon() adds the weapon to the character and increase its attack power with the weapons attack power', () => {
    inimigo.useWeapon(heavyMachine.weapon, heavyMachine.attackPower);
    expect(inimigo.weapon).toBe('Heavy Machine');
    expect(inimigo.attackPower).toBe(3);

});

test('useVehicle() adds the vehicle to the character and increase its health with the vehicles health points', () => {
    inimigo.useVehicle(tank.vehicle, tank.vehicleHealth);
    expect(inimigo.vehicle).toBe('Tank');
    expect(inimigo.health).toBe(4);
});

test('getDamage() decreases the characters health with the amout of damaged it took', () => {
    inimigo.getDamage(3);
    expect(inimigo.health).toBe(1);
    inimigo.getDamage(3);
    expect(inimigo.health).toBe(0);
});

test('getSpecialAbility() turns the emeny character Invulnerable and it can use granades as weapon', () => {
    inimigoChefe.getDamage(5);
    inimigoChefe.getSpecialAbility();
    expect(inimigoChefe.health).toBe(1);
    expect(inimigoChefe.weapon).toBe('Granade');
    expect(inimigoChefe.attackPower).toBe(11);
});