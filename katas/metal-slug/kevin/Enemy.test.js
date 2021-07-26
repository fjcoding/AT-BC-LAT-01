import { EnemySoldier, Mercenarie, Alien, Boss, EnemyVehicle } from './Enemy.js';
test('Verify that EnemySoldier has 1 life points and 1 attack power', () => {
    const enemySoldier = new EnemySoldier(1,1);
    const expectedLifePoints = 1;
    const expectedAttackPower = 1;
    expect(enemySoldier.lifePoints).toBe(expectedLifePoints);
    expect(enemySoldier.attackPower).toBe(expectedAttackPower);
});
test('Verify that Mercenarie has 2 life points and 1 attack power', () => {
    const mercenarie = new Mercenarie(2,1);
    const expectedLifePoints = 2;
    const expectedAttackPower = 1;
    expect(mercenarie.lifePoints).toBe(expectedLifePoints);
    expect(mercenarie.attackPower).toBe(expectedAttackPower);
});
test('Verify that Alien has 3 life points and 2 attack power', () => {
    const alien = new Alien(3,2);
    const expectedLifePoints = 3;
    const expectedAttackPower = 2;
    expect(alien.lifePoints).toBe(expectedLifePoints);
    expect(alien.attackPower).toBe(expectedAttackPower);
});
test('Verify that Boss has 30 life points and 5 attack power', () => {
    const boss = new Boss(30,5);
    const expectedLifePoints = 30;
    const expectedAttackPower = 5;
    expect(boss.lifePoints).toBe(expectedLifePoints);
    expect(boss.attackPower).toBe(expectedAttackPower);
});
test('Verify that EnemyVehicle has 5 life points and 1 attack power', () => {
    const enemyVehicle = new EnemyVehicle(5,1);
    const expectedLifePoints = 5;
    const expectedAttackPower = 1;
    expect(enemyVehicle.lifePoints).toBe(expectedLifePoints);
    expect(enemyVehicle.attackPower).toBe(expectedAttackPower);
});