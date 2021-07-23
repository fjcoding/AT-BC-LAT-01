import { Weapon } from './weapons.js';

export class WeaponList{
    constructor(){
        this._weaponType = {
            handGun : new Weapon('handGun', 1, 6, false),
            Shotgun : new Weapon('ShotGun', 5, 2, true),
            HeavyMachineGun : new Weapon('Heavy Machine Gun', 2, 8, false),
            RocketLauncher : new Weapon('Rocket Launcher', 4, 9, false),
            FlameShot : new Weapon('Flame Tower', 5, 4, true),
            Granade : new Weapon('Granade', 8, 6, true ),
            knife : new Weapon( 'Knife', 1, 2, false)
        };
    }
}