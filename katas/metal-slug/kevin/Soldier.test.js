import { Soldier } from './Soldier.js';
import { HeavyMachineGun } from './weapons/HeavyMachineGun.js';
test('Verify that the soldier was created correctly with his attributes', () => {
    let soldier = new Soldier(1, 1, 3, 1);
    const expectedSoldierLifePoints = 1;
    const expectedSoldierAttackPower = 1;
    const expectedSoldierLives = 3;
    const expectedSoldierDistance = 1;
    expect(soldier.lifePoints).toBe(expectedSoldierLifePoints);
    expect(soldier.attackPower).toBe(expectedSoldierAttackPower);
    expect(soldier.lives).toBe(expectedSoldierLives);
    expect(soldier.distance).toBe(expectedSoldierDistance);
});
test('Verify that the soldier can shoot a HeavyMachineGun', () => {
    let soldier = new Soldier(1, 1, 3, 1);
    let heavyMG = new HeavyMachineGun(4);
    const actualResult = soldier.shootAWeapon(heavyMG);
    const expectedSoldierTotalAttackPower = 2;
    expect(actualResult).toBe(expectedSoldierTotalAttackPower);
});