import { Character } from './Character.js';
import { Weapon } from './Weapons.js';

export class Player extends Character{
    constructor(CharacterType, Health, Life, Weapon, Attack){
        super(CharacterType, Health);
        this.Life = Life;
        this.Weapon = Weapon;
        this.Attack = Attack;
    }

    getPlayerAttack(){
    return this.Attack;
    }
    
    PickWeapon (weaponPicked) {
    Weapon = weaponPicked;
    Attack = weaponPicked.getWeaponDamage(weaponPicked);
    return Weapon;
    }

}

export const Player1 = new Player(
    'Player1',
    1,
    3,
    'handgun',
    1);

    console.log(Player1.getPlayerAttack())
    Player1.PickWeapon('heavyMachineGun')