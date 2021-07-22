import { Soldier } from './Soldier.js';
test('Verify that the soldier was created correctly with his actions', () => {
    const soldier = new Soldier(true, true, true); 
    expect(soldier.shootWeapon).toBe(true);
    expect(soldier.useKnife).toBe(true);
    expect(soldier.throwGrenades).toBe(true);
});