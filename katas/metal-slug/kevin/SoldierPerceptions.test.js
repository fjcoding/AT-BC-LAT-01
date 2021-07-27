import { Soldier } from './Soldier.js';
import { EnemySoldier, EnemyVehicle } from './Enemy.js';
import { SoldierPerceptions } from './SoldierPerceptions.js';
test('Verify that the soldier recognize a close enemy', () => {
    let soldierPerceptions = new SoldierPerceptions();
    let soldier = new Soldier(1, 1, 3, 1);
    let enemySoldier = new EnemySoldier(1, 1, 2);
    const actualResult = soldierPerceptions.isEnemyclose(soldier, enemySoldier);
    expect(actualResult).toBe(true);
});
test('Verify that the soldier recognize an enemy vehicle', () => {
    let soldierPerceptions = new SoldierPerceptions();
    let enemyVehicle = new EnemyVehicle(5, 1, 2);
    const actualResult = soldierPerceptions.isEnemyAVehicle(enemyVehicle);
    expect(actualResult).toBe(true);
});