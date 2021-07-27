import { Player1, Player } from './Player.js';
import { heavyMachineGun, rocketLauncher, shotgun, flameShot } from './Weapons.js';
import { Tank, Plane, Camel, Submarine } from './Vehicles.js';
import { Mercenarie, Soldier, Boss, Alien } from './Enemy.js';

test('Players should be created with the correct data type and atributes complete', () => {
    expect(new Player('Player1', 1, 3)).toEqual({'CharacterType': 'Player1', 'Health': 1, 'Life' : 3});
});

test('Weapons need to be picked and Attack Power be replaced when Player equip it', () => {
    Player1.PickWeapon(shotgun);
    expect(Player1.getPlayerAttack()).toEqual(5, 'shotgun');
    Player1.PickWeapon(heavyMachineGun);
    expect(Player1.getPlayerAttack()).toEqual(6, 'heavyMachineGun');
    Player1.PickWeapon(flameShot);
    expect(Player1.getPlayerAttack()).toEqual(4, 'flameShot');
    Player1.PickWeapon(rocketLauncher);
    expect(Player1.getPlayerAttack()).toEqual(7, 'rocketLauncher');
});

test('Results of enemies health and armor after a combat from player', () => {
    //expect(Player1.Shoot([[ 10, 10, 'Heal'], [ 2, 2, 'Invisible'], [ 1, 0, 'Dont Have'], [ 1, 0, 'Dont Have']])).toEqual([[3, 10, 'Heal'], [-5, 2, 'Invisible'], [-6, 0, 'Dont Have'], [-6, 0, 'Dont Have']]);
    expect(Player1.Shoot([Boss, Alien, Mercenarie, Soldier])).toEqual([[3, 10, 'Heal'], [-5, 2, 'Invisible'], [-5, 1, 'Dont Have'], [-6, 1, 'Dont Have']]);
});

test('Player need to get the Health from Vehicle when get in to it', () => {
    expect(Player1.getInVehicle(Tank)).toEqual(3);
    expect(Player1.getInVehicle(Plane)).toEqual(4);
    expect(Player1.getInVehicle(Camel)).toEqual(1);
    expect(Player1.getInVehicle(Submarine)).toEqual(3);
});