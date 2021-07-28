import { Soldier } from './Soldier.js';
import { Civilian } from './Civilian.js';
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
test('Verify that the soldier can use a Knife with a non-enemy  close vehicle', () => {
    let soldier = new Soldier(1, 1, 3, 1);
    const actualResult = soldier.useAKnife(false, true);
    const expectedSoldierTotalAttackPower = 1;
    expect(actualResult).toBe(expectedSoldierTotalAttackPower);
});
test('Verify that the soldier can throw a grenade', () => {
    let soldier = new Soldier(1, 1, 3, 1);
    const actualResult = soldier.throwGrenades();
    const expectedSoldierTotalAttackPower = 10;
    expect(actualResult).toBe(expectedSoldierTotalAttackPower);
});
test('Verify that the soldier can free a civilian', () => {
    let soldier = new Soldier(1, 1, 3, 1);
    let civilian = new Civilian(true);
    expect(soldier.freeCivilian(civilian)).toBe(false);
});