import { CharacterStatus } from './CharacterStatus.js';
import { Shotgun, HeavyMachineGun, RocketLauncher, FlameShot, Handgun } from './Weapon.js';
import { Tank, Plane, Camel, Submarine } from './Vehicle.js';
import { Soldier } from './Soldier.js';
test('Verify that totalLifePoints is 4 when a soldier is in a Tank', () => {
    const setcharacterStatus = new CharacterStatus();
    let tank = new Tank();
    let soldier = new Soldier(1, 1, 3, 1);
    const expectedResult = 4;
    expect(setcharacterStatus.totalLifePoints(soldier, tank)).toBe(expectedResult);
});
test('Verify that totalLifePoints is 5 when a soldier is in a Plane', () => {
    const setcharacterStatus = new CharacterStatus();
    let plane = new Plane();
    let soldier = new Soldier(1, 1, 3, 1);
    const expectedResult = 5;
    expect(setcharacterStatus.totalLifePoints(soldier, plane)).toBe(expectedResult);
});
test('Verify that totalLifePoints is 2 when a soldier is in a Camel', () => {
    const setcharacterStatus = new CharacterStatus();
    let camel = new Camel();
    let soldier = new Soldier(1, 1, 3, 1);
    const expectedResult = 2;
    expect(setcharacterStatus.totalLifePoints(soldier, camel)).toBe(expectedResult);
});
test('Verify that totalLifePoints is 4 when a soldier is in a Submarine', () => {
    const setcharacterStatus = new CharacterStatus();
    let submarine = new Submarine();
    let soldier = new Soldier(1, 1, 3, 1);
    const expectedResult = 4;
    expect(setcharacterStatus.totalLifePoints(soldier, submarine)).toBe(expectedResult);
});
test('Verify that totalAttackPower is 5 when a soldier is armed with a Shotgun', () => {
    const setcharacterStatus = new CharacterStatus();
    let shotgun = new Shotgun();
    let soldier = new Soldier(1, 1, 3, 1);
    const expectedResult = 5;
    expect(setcharacterStatus.totalAttackPower(soldier, shotgun)).toBe(expectedResult);
});
test('Verify that totalAttackPower is 2 when a soldier is armed with a HeavyMachineGun', () => {
    const setcharacterStatus = new CharacterStatus();
    let heavyMachineGun = new HeavyMachineGun();
    let soldier = new Soldier(1, 1, 3, 1);
    const expectedResult = 2;
    expect(setcharacterStatus.totalAttackPower(soldier, heavyMachineGun)).toBe(expectedResult);
});
test('Verify that totalAttackPower is 4 when a soldier is armed with a RocketLauncher', () => {
    const setcharacterStatus = new CharacterStatus();
    let rocketLauncher = new RocketLauncher();
    let soldier = new Soldier(1, 1, 3, 1);
    const expectedResult = 4;
    expect(setcharacterStatus.totalAttackPower(soldier, rocketLauncher)).toBe(expectedResult);
});
test('Verify that totalAttackPower is 5 when a soldier is armed with a FlameShot', () => {
    const setcharacterStatus = new CharacterStatus();
    let flameShot = new FlameShot();
    let soldier = new Soldier(1, 1, 3, 1);
    const expectedResult = 5;
    expect(setcharacterStatus.totalAttackPower(soldier, flameShot)).toBe(expectedResult);
});
test('Verify that totalAttackPower is 1 when a soldier is armed with a Handgun', () => {
    const setcharacterStatus = new CharacterStatus();
    let handgun = new Handgun();
    let soldier = new Soldier(1, 1, 3, 1);
    const expectedResult = 1;
    expect(setcharacterStatus.totalAttackPower(soldier, handgun)).toBe(expectedResult);
});