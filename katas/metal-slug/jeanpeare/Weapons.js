export class Weapon {
    constructor(WeaponType, Damage, NumberOfTargets){
        this.WeaponType = WeaponType;
        this.Damage = Damage;
        this.NumberOfTargets = NumberOfTargets;
    }

    getWeaponDamage(){
        return this.Damage;
    }

    getWeaponTargets(){
        return this.NumberOfTargets;
    }
}

export const handgun = new Weapon(
    'handgun',
    1,
    1);
export const shotgun = new Weapon(
    'shotgun',
    5,
    4);
export const flameShot = new Weapon(
    'flameShot',
    4,
    10);
export const heavyMachineGun = new Weapon(
    'heavyMachineGun',
    6,
    1);
export const rocketLauncher = new Weapon(
    'rocketLauncher',
    7,
    5);
export const knife = new Weapon (
    'knife',
    1,
    1);