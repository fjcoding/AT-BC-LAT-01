import { Shotgun, HeavyMachineGun, RocketLauncher, FlameShot, Handgun } from './Weapon.js';
test('Verify that Shotgun has 5 points of attack power', () => {
    let shotgun = new Shotgun();
    const expectedShotgunAttackPower = 5;
    expect(shotgun.attackPower).toBe(expectedShotgunAttackPower);
});
test('Verify that HeavyMachineGun has 2 points of attack power', () => {
    let heavyMachineGun = new HeavyMachineGun();
    const expectedHeavyMachineGunnAttackPower = 2;
    expect(heavyMachineGun.attackPower).toBe(expectedHeavyMachineGunnAttackPower);
});
test('Verify that RocketLauncher has 4 points of attack power', () => {
    let rocketLauncher = new RocketLauncher();
    const expectedRocketLauncherAttackPower = 4;
    expect(rocketLauncher.attackPower).toBe(expectedRocketLauncherAttackPower);
});
test('Verify that FlameShot has 5 points of attack power', () => {
    let flameShot = new FlameShot();
    const expectedFlameShotAttackPower = 5;
    expect(flameShot.attackPower).toBe(expectedFlameShotAttackPower);
});
test('Verify that Handgun has 1 points of attack power', () => {
    let handgun = new Handgun();
    const expectedHandgunShotAttackPower = 1;
    expect(handgun.attackPower).toBe(expectedHandgunShotAttackPower);
});