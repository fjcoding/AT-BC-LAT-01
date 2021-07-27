import { Character } from './Character.js';
import {enemiesStats, enemiesArray} from './Enemy.js';

export class Player extends Character{
    constructor(CharacterType, Health, Life, Weapon, Attack, Targets){
        super(CharacterType, Health);
        this.Life = Life;
        this.Weapon = Weapon;
        this.Attack = Attack;
        this.Targets = Targets;
    }

    getPlayerAttack(){
        return this.Attack;
    }

    PickWeapon (weaponPicked) {
        this.Weapon = weaponPicked;
        this.Attack = weaponPicked.getWeaponDamage();
        this.Targets = weaponPicked.getWeaponTargets();
        return this.Attack, this.Weapon, this.Targets;
    }

    getInVehicle(vehiclePicked){
        this.Health = vehiclePicked.getVehicleHealth();
        return this.Health;
    }

    Shoot (enemiesStats){
        var Damage = this.Attack;
        var Targets = this.Targets;
        if (enemiesStats.length <= this.Targets){
            enemiesStats.forEach(function (value, index) {
                enemiesStats[index][0] -= Damage;
            });
        } else if (enemiesStats.length > this.Targets){
            var index = 0;
            while (index < Targets){
                enemiesStats[index][0] -= Damage;
                index++;
            }
        }
        enemiesStats.forEach(function (value, index) {
            if (enemiesStats[index][0] <= 0) {
                console.log(enemiesArray[index].CharacterType + ' is dead');
            } else {
                console.log(enemiesArray[index].CharacterType + ' is still alive');
            }
        });
        return enemiesStats;
    }
}

export const Player1 = new Player(
    'Player1',
    1,
    3,
    'handgun',
    1,
    10);

Player1.Shoot(enemiesStats);