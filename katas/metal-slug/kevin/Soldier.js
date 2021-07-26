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
    isEnemyclose(enemyDistance) {
        let enemyClose = false;
        if (enemyDistance == 0) {
            enemyClose = true;
        } else {
            enemyClose = false;
        }
        return enemyClose;
    }
    isEnemyAVehicle(VehicleLifePoints) {
        let itsVehicle = false;
        if (VehicleLifePoints > 1) {
            itsVehicle = true;
        } else {
            itsVehicle = false;
        }
        return itsVehicle;
    }
    freeCivilian(civilian) {
        if (civilian.isTied == true) {
            civilian.isTied = false;
        }
        return civilian.isTied;
    }
}