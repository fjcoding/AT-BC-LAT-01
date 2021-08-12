import {
    AttributesVerifier,
    PropertyVerifier,
    ActorVerifier,
    ActionVerifier,
    ValueVerifier
} from './../../main/api-utilities/PropertyVerifier';

describe('Verify that PropertyVerifier class', () => {
    test('has check method and can be used without instanciation', () => {
        expect(PropertyVerifier.check()).toBe(undefined);
    });
});

describe('Verify that AttributesVerifier', () => {
    test('returns true when the object has the requested attributes', () => {
        const scenario = {actors:[], actions: []};
        expect(AttributesVerifier.check(scenario, ['actors', 'actions'])).toBe(true);
    });

    test('returns string when the object has not any of requested attributes', () => {
        const scenario = {actors:[], actions: []};
        expect(AttributesVerifier.check(scenario, ['actors', 'actions', 'noDefinedAttribute']))
            .toBe('noDefinedAttribute does not exist');
    });
});

describe('Verify that ActorVerifier', () => {
    const scenario = {actors:[
        {name: 'Marco', type: 'PF Squad Soldier', weapon: 'Handgun'},
        {name: 'RAS1', type: 'Rebel Army soldier', weapon: 'rifle'}
    ]};

    test('returns true when an specified actor exists in the actors attribute', () => {
        expect(ActorVerifier.check(scenario, 'Marco')).toBe(true);
    });

    test('returns string when an specified actor does not exist in the actors attribute', () => {
        expect(ActorVerifier.check(scenario, 'InexistentActor')).toBe('InexistentActor does not exist');
    });
});

describe('Verify that ActionVerifier', () => {
    test('returns true when the element attribute is defined in the action', () => {
        const action = {actor: 'Marco', action: 'Pick Weapon', element: 'Weapon'};
        expect(ActionVerifier.check(action)).toBe(true);
    });

    test('returns true when the from attribute is defined in the action', () => {
        const action = {actor: 'Marco', action: 'receive attack', from: 'RA2'};
        expect(ActionVerifier.check(action)).toBe(true);
    });

    test('returns true when the target attribute is defined in the action', () => {
        const action = {actor: 'Marco', action: 'shot Weapon', target: 'west'};
        expect(ActionVerifier.check(action)).toBe(true);
    });

    test('returns string when the from, element or target attributes are not defined in the action', () => {
        const action = {actor: 'Marco', action: 'shot Weapon'};
        expect(ActionVerifier.check(action)).toBe('Element, from or target not defined in action');
    });

    test('returns string when the target attribute is defined in a unavailable direction', () => {
        const action = {actor: 'Marco', action: 'shot Weapon', target: 'front'};
        expect(ActionVerifier.check(action)).toBe('target defined in an unavailable direction');
    });
});

describe('Verifiy that ValueVerifier', () => {
    test('returns true when the inserted value is in the defined range', () => {
        expect(ValueVerifier.check(2,0,100)).toBe(true);
    });
    
    test('returns string when the inserted value is not in the defined range', () => {
        expect(ValueVerifier.check(0,1,100)).toBe('value out of range');
    });
});
