export class SoldierPerceptions {
    isEnemyclose(soldier, enemy) {
        let enemyClose = false;
        let minimumDistance = enemy.distance - soldier.distance;
        console.log(minimumDistance);
        if (minimumDistance == 1) {
            enemyClose = true;
        } else {
            enemyClose = false;
        }
        return enemyClose;
    }
    isEnemyAVehicle(enemy) {
        let isVehicle = false;
        if (enemy.lifePoints > 3) {
            isVehicle = true;
        } else {
            isVehicle = false;
        }
        return isVehicle;
    }
}