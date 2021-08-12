import { 
    ScenarioAttributeVerifier,
    ActorAttributeVerifier } from '../../main/api-utilities/ScenarioAttributeVerifier';


describe('Verify that ScenarioAttributeVerifier', () => {
    const verifier = new ScenarioAttributeVerifier;
    test('has attribute, value, actor, action attributes', () => {
        expect(verifier.attributeVerifier).not.toBe(undefined);
        expect(verifier.valueVerifier).not.toBe(undefined);
        expect(verifier.actorVerifier).not.toBe(undefined);
        expect(verifier.actionVerifier).not.toBe(undefined);
    });
});

describe('Verify that ActorsAttributeVerifier', () => {
    const verifier = new ActorAttributeVerifier;

    test('has attribute, value, actor, action attributes', () => {
        expect(verifier.attributeVerifier).not.toBe(undefined);
        expect(verifier.valueVerifier).not.toBe(undefined);
        expect(verifier.actorVerifier).not.toBe(undefined);
        expect(verifier.actionVerifier).not.toBe(undefined);
    });

    test('returns true when the type, name, health, weapon and position is declared in the actor', () => {
        const actor = {
            name: 'Marco',
            type: 'PF Squad Soldier',
            health: 1,
            weapon: 'shotgun',
            position: {'xPos': 0, 'yPos': 0}};
        expect(verifier.check(actor)).toBe(true);
    });

    test('returns string when the type is not declared in the actor', () => {
        const actor = {
            name: 'Marco',
            health: 1,
            weapon: 'shotgun',
            position: {'xPos': 0, 'yPos': 0}};
        expect(verifier.check(actor)).toBe('type does not exist');
    });

    test('returns string when the name is not declared in the actor', () => {
        const actor = {
            type: 'PF Squad Soldier',
            health: 1,
            weapon: 'shotgun',
            position: {'xPos': 0, 'yPos': 0}};
        expect(verifier.check(actor)).toBe('name does not exist');
    });

    test('returns string when the health is not declared in the actor', () => {
        const actor = {
            name: 'Marco',
            type: 'PF Squad Soldier',
            weapon: 'shotgun',
            position: {'xPos': 0, 'yPos': 0}};
        expect(verifier.check(actor)).toBe('health does not exist');
    });

    test('returns string when the weapon is not declared in the actor', () => {
        const actor = {
            name: 'Marco',
            type: 'PF Squad Soldier',
            health: 1,
            position: {'xPos': 0, 'yPos': 0}};
        expect(verifier.check(actor)).toBe('weapon does not exist');
    });

    test('returns string when the position is not declared in the actor', () => {
        const actor = {
            name: 'Marco',
            type: 'PF Squad Soldier',
            health: 1,
            weapon: 'shotgun'
        };
        expect(verifier.check(actor)).toBe('position does not exist');
    });

    test('returns string when the position is out of the range (100, 100)', () => {
        const actor = {
            name: 'Marco',
            type: 'PF Squad Soldier',
            health: 1,
            weapon: 'shotgun',
            position: {'xPos': 101, 'yPos': 0}};
        expect(verifier.check(actor)).toBe('value out of range');
    })
});
