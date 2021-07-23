import { flameShot, heavyMachineGun, rocketLauncher, shotgun } from './Weapons.js';

export const weapons = [shotgun, flameShot, heavyMachineGun, rocketLauncher];

export class Character {
    constructor (CharacterType, Health) {
        this.CharacterType = CharacterType;
        this.Health = Health;
    }
}

export class Civilian extends Character {
    constructor (CharacterType, Health, Weapon){
        super(CharacterType, Health);
        this.Weapon = Weapon;
    }

    generateWeapon (){
        var civilWeapon = Math.floor(Math.random() * weapons.length);
        this.Weapon = weapons[civilWeapon];
        return this.Weapon;
    }
}
<<<<<<< HEAD
=======

export const Soldier = new Enemy(
    'Soldier',
    1,
    0,
    'Dont have'
);

export const Mercenarie = new Enemy(
    'Mercenarie',
    1,
    2,
    'Dont have'
);

export const Alien = new Enemy(
    'Alien',
    4,
    0,
    'Invisible'
);

export const Boss = new Enemy(
    'Boss',
    10,
    10,
    'Heal'
);
>>>>>>> 8de7c55 (Files corrected after discrepancy with eslint, package-lock modified after library installation)

export const genericCivilian = new Civilian (
    'Civilian',
    1,);