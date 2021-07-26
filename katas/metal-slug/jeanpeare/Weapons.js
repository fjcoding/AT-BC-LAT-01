import { Player } from "./Player.js";

export class Weapon {
    constructor(WeaponType, Damage, NumberOfTargets){
        this.WeaponType = WeaponType;
        this.Damage = Damage;
        this.NumberOfTargets = NumberOfTargets;
    }
    
    getWeaponDamage(WeaponType){
        return WeaponType.Damage;
    }
    
    getWeaponTargets(WeaponType){
        return WeaponType.NumberOfTargets;
    }
}

export const weapons = {
    handgun: new Weapon(
        'handgun',
        1,
        1),
    shotgun: new Weapon(
        'shotgun', 
        5,
        4),
    flameShot: new Weapon(
        'flameShot', 
        5,
        10),
    heavyMachineGun: new Weapon(
        'heavyMachineGun', 
        5,
        1),
    rocketLauncher: new Weapon(
        'rocketLauncher', 
        5,
        5)
}; 

console.log(rocketLauncher.getWeaponDamage('rocketLauncher'))