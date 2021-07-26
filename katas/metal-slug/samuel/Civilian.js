import { RocketLauncher } from './Weapons.js';
import { Grenade } from './Weapons.js';
import { FlameShot } from './Weapons.js';
import { Shotgun } from './Weapons.js';
import { HeavyMachine } from './Weapons.js';

export class Civilian {
    constructor() {
        const rocketLauncherInstance = new RocketLauncher();
        const grenadeInstance = new Grenade();
        const flameShotInstance = new FlameShot();
        const shotgunInstance = new Shotgun();
        const HeavyMachineInstance = new HeavyMachine();
        this.weapons = [rocketLauncherInstance, grenadeInstance, flameShotInstance, shotgunInstance, HeavyMachineInstance];
        this.knifeAction = 'Save';
    }

    dropWeapon() {
        const selectRandomWeapon = Math.floor(Math.random() * this.weapons.length);
        return this.weapons[selectRandomWeapon];
    }
}