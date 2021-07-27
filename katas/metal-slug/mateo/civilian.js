import { Weapon } from './weapon.js';

export class Civilian {
    constructor() {
        const shotGun = new Weapon(5, 'multiple');
        const heavyMachineGun = new Weapon(2, 'single');
        const rocketLauncher = new Weapon(4, 'single');
        const flameGun = new Weapon(5, 'multiple');
        this.weapons = [shotGun, heavyMachineGun, rocketLauncher, flameGun];
    }

    dropWeapon() {
        const randomWeapon = Math.floor(Math.random() * this.weapons.length);
        return this.weapons[randomWeapon];
    }
}