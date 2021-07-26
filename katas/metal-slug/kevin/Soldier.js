export class Soldier {
    constructor(lifePoints = 1, attackPower = 1, lives = 3, distance) {
        this.lifePoints = lifePoints;
        this.attackPower = attackPower;
        this.lives = lives;
        this.distance = distance;
    }
    useAKnife = (enemyVehicle, enemyclose) => {
        if (enemyVehicle == false && enemyclose == true) {
            this.attackPower = 1;
        }
        return this.attackPower;
    };
    throwGrenades = () => {
        const soldier = new Soldier();
        soldier.attackPower = 10;
        return soldier.attackPower;
    };
    itsEnemyclose(enemyDistance) {
        let enemyClose = false;
        if (enemyDistance == 0) {
            enemyClose = true;
        } else {
            enemyClose = false;
        }
        return enemyClose;
    }
    itsEnemyAVehicle(VehicleLifePoints) {
        let itsVehicle = false;
        if (VehicleLifePoints > 1) {
            itsVehicle = true;
        } else {
            itsVehicle = false;
        }
        return itsVehicle;
    }
    freeHostage(hostage) {
        hostage.tied = false;
        return  hostage.tied;
    }
}