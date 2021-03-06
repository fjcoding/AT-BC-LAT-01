import { Player1, Player } from './Player.js';
import { heavyMachineGun, rocketLauncher, shotgun, flameShot, handgun } from './Weapons.js';
import { Tank, Plane, Camel, Submarine } from './Vehicles.js';
import { Mercenarie, Soldier, Boss, Alien, createEnemies } from './Enemy.js';

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

test('Results of enemies health and stats after a combat from player', () => {
    expect(Player1.Shoot([Boss, Alien, Mercenarie, Soldier])).toEqual([[3, 10, 'Heal'], [-5, 2, 'Invisible'], [-5, 1, 'Dont Have'], [-6, 1, 'Dont Have']]);
    Player1.PickWeapon(handgun);
    expect(Player1.Shoot([Boss, Alien, Mercenarie, Soldier])).toEqual([[9, 10, 'Heal'], [2, 2, 'Invisible'], [2, 1, 'Dont Have'], [1, 1, 'Dont Have']]);
});

test('Player need to get the Health from Vehicle when get in to it', () => {
    expect(Player1.getInVehicle(Tank)).toEqual(3);
    expect(Player1.getInVehicle(Plane)).toEqual(4);
    expect(Player1.getInVehicle(Camel)).toEqual(1);
    expect(Player1.getInVehicle(Submarine)).toEqual(3);
});

test('Results of enemies health and stats after a Grenade from player', () => {
    const enemiesArray = [Boss, Alien, Mercenarie, Soldier];
    expect(Player1.throwGrenades((createEnemies(enemiesArray)), enemiesArray)).toEqual([[8, 10, 'Heal'], [0, 2, 'Invisible'], [0, 1, 'Dont Have'], [-1, 1, 'Dont Have']]);
    const  enemiesArray2 = [Boss, Alien, Mercenarie, Soldier, Alien, Mercenarie, Soldier, Alien, Mercenarie, Soldier, Alien, Mercenarie, Soldier];
    expect(Player1.throwGrenades((createEnemies(enemiesArray2)), enemiesArray2)).toEqual([[8, 10, 'Heal'], [0, 2, 'Invisible'], [0, 1, 'Dont Have'], [-1, 1, 'Dont Have'], [0, 2, 'Invisible'], [0, 1, 'Dont Have'], [-1, 1, 'Dont Have'], [0, 2, 'Invisible'], [0, 1, 'Dont Have'], [-1, 1, 'Dont Have'], [2, 2, 'Invisible'], [2, 1, 'Dont Have'], [1, 1, 'Dont Have']]);
});

test('Player stats after receiving damage', () => {
    Player1.getInVehicle(Tank);
    expect(Player1.ReiciveDamage(Boss)).toEqual([1, 0, 'Tank has been destroyed!', '']);
    expect(Player1.ReiciveDamage(Alien)).toEqual([1, 0, '', 'Player1 is dead, 2 lifes remaining']);
    Player1.Health=4;
    expect(Player1.ReiciveDamage(Alien)).toEqual([2, 0, '', 'Player1 is still alive, 2 health remaining']);
    Player1.getInVehicle(Tank);
    expect(Player1.ReiciveDamage(Alien)).toEqual([2, 1, 'Tank has 1 life points remaining', '']);
    Player1.Life=1;
    expect(Player1.death()).toEqual('GAME OVER');
});