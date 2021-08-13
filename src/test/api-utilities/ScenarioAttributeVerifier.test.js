import {
    ScenarioAttributeVerifier,
    ActorAttributeVerifier,
    ActionAttributeVerifier,
    WeaponAttributeVerifier } from '../../main/api-utilities/ScenarioAttributeVerifier';


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
    });
});

describe('Verify that ActionAttributeVerifier', () => {
    const scenario = {
        actors: [
            {name: 'Marco', type: 'PF Squad Soldier', weapon: 'Handgun'},
            {name: 'RAS1', type: 'Rebel Army soldier', weapon: 'rifle'}],
    };
    const verifier = new ActionAttributeVerifier;

    test('returns true when the action can be executed in the escenario', () => {
        const action = {actor: 'Marco', action: 'shoot weapon', target: 'east', scenes: 100};
        expect(verifier.check(scenario, action)).toBe(true);
    });

    test('returns string when the attributes actor and action are not defined in the action', () => {
        const action = 'genericAction';
        expect(verifier.check(scenario, action)).toBe('actor does not exist');
    });

    test('return string when an action does not have element, from or target attributes are not defined', () => {
        const action = {actor: 'Marco', action: 'Pick shotgun', scenes: 100};
        expect(verifier.check(scenario, action)).toBe('Element, from or target not defined in action');
    });

    test('return string when the actor in the action does not exist', () => {
        const action = {actor: 'Inexistent Actor', action: 'Pick shotgun', element: 'shotgun', scenes: 100};
        expect(verifier.check(scenario, action)).toBe('Inexistent Actor does not exist');
    });

    test('return string when the target is unavailable', () => {
        const action = {actor: 'Marco', action: 'shoot shotgun', target: 'front', scenes: 100};
        expect(verifier.check(scenario, action)).toBe('target defined in an unavailable direction');
    });

    test('return string when the scenes attribute is not defined', () => {
        const action = {actor: 'Marco', action: 'shoot shotgun', target: 'west'};
        expect(verifier.check(scenario, action)).toBe('scenes does not exist');
    });
});

describe('Verify that WeaponAttributeVerifier', () => {
    const scenario = {
        actors: [
            {name: 'Marco', type: 'PF Squad Soldier', weapon: 'Handgun'},
            {name: 'RAS1', type: 'Rebel Army soldier', weapon: 'rifle'}],
    };
    const verifier = new WeaponAttributeVerifier;

    test('returns true when the weapon can be replaced in a defined actor', () => {
        const weapon = {actor: 'Marco', name: 'shotgun', power: 10, xScope: 10, yScope: 5};
        expect(verifier.check(scenario, weapon)).toBe(true);
    });

    test('returns string when the attributes actor, power and scope are not defined in the weapon', () => {
        const weapon = 'gun';
        expect(verifier.check(scenario, weapon)).toBe('actor does not exist');
    });

    test('checks that a weapon can not be replaced in an undefined actor', () => {
        const weapon = {name: 'shotgun', power: 10, xScope: 10, yScope: 5};
        expect(verifier.check(scenario, weapon)).toBe('actor does not exist');
    });

    test('checks that a weapon can not be replaced when the actor does not exist', () => {
        const weapon = {actor: 'InexistentActor', name: 'shotgun', power: 10, xScope: 10, yScope: 5};
        expect(verifier.check(scenario, weapon)).toBe('InexistentActor does not exist');
    });

    test('returns string when xScope is out of range (0, 100)', () => {
        const weapon = {actor: 'Marco', name: 'shotgun', power: 10, xScope: 0, yScope: 1000};
        expect(verifier.check(scenario, weapon)).toBe('value out of range');
    });

    test('returns string when yScope is out of range (0, 100)', () => {
        const weapon = {actor: 'Marco', name: 'shotgun', power: 10, xScope: 10, yScope: -1};
        expect(verifier.check(scenario, weapon)).toBe('value out of range');
    });

    test('returns true when yScope is in range (0, 100)', () => {
        const weapon = {actor: 'Marco', name: 'shotgun', power: 0, xScope: 0, yScope: -1};
        expect(verifier.check(scenario, weapon)).toBe('value out of range');
    });
});
