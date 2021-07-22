import { CharacterStatus } from './CharacterStatus.js';
test('Verify that getLifePoints get the life points of a soldier in a Tank', () => {
    const setcharacterStatus = new CharacterStatus();
    expect(setcharacterStatus.getLifePoints(1,3)).toBe(4);
});
test('Verify that getAttackPower get the attack Powe of a soldier with a Heavy Machinegun', () => {
    const setcharacterStatus = new CharacterStatus();
    expect(setcharacterStatus.getAttackPower(1,3)).toBe(3);
});