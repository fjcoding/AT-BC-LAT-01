import { Character, genericCivilian } from './Character.js';
import { createEnemies } from './Enemy.js';

export class Player extends Character{
    constructor(CharacterType, Health, Life, Weapon, Attack, Targets, VehicleHealth, LastVehicle){
        super(CharacterType, Health);
        this.Life = Life;
        this.Weapon = Weapon;
        this.Attack = Attack;
        this.Targets = Targets;
        this.VehicleHealth = VehicleHealth;
        this.LastVehicle = LastVehicle;
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
        this.VehicleHealth = vehiclePicked.getVehicleHealth();
        this.LastVehicle = vehiclePicked;
        return this.VehicleHealth;
    }

    Shoot (enemiesArray){
        var enemiesStats = createEnemies(enemiesArray);
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

    throwGrenades (enemiesStats, enemiesArray){
        var Damage = 2;
        var Targets = 10;
        if (enemiesStats.length <= Targets){
            enemiesStats.forEach(function (value, index) {
                enemiesStats[index][0] -= Damage;
            });
        } else if (enemiesStats.length > this.Targets){
            var index = 0;
            while (index < Targets){
                console.log('the enemy statas ' +enemiesStats[index][0]);
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


    ReiciveDamage (enemy){
        var enemyDetails = enemy.getEnemyDetails();
        var VehicleStatus='';
        var PlayerStatus ='';
        if (this.VehicleHealth > 0){
            if (enemyDetails[1] >= this.VehicleHealth){
                VehicleStatus = this.LastVehicle.VehiclesType + ' has been destroyed!';
                this.LastVehicle.Destroy();
                this.LastVehicle = 0;
                this.VehicleHealth = 0;
            } else {
                this.VehicleHealth -= enemyDetails[1];
                VehicleStatus = this.LastVehicle.VehiclesType + ' has ' + this.VehicleHealth + ' life points remaining';
            }
        } else {
            if (enemyDetails[1] >= this.Health) {
                this.death();
                PlayerStatus = this.CharacterType +' is dead, ' + this.Life +' lifes remaining';
            } else {
                this.Health -= enemyDetails[1];
                PlayerStatus = this.CharacterType +' is still alive, ' + this.Health + ' health remaining';
            }
        }
        return [this.Health, this.VehicleHealth, VehicleStatus, PlayerStatus];
    }

    breakFree(){
        this.PickWeapon(genericCivilian.generateWeapon());
    }

    death(){
        this.Life -= 1;
        var Msg ='';
        console.log(this.Life);
        if (this.Life == 0) {
            Msg = 'GAME OVER';
        } else {
            this.Health = 1;
            Msg = this.Life +' lifes remaining';
        }
        return Msg;
    }
}

export const Player1 = new Player(
    'Player1',
    1,
    3,
    'handgun',
    1,
    10,
    0,
    0);