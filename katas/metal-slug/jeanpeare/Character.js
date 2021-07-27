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

export const genericCivilian = new Civilian (
    'Civilian',
    1,);
