import {
    AttributesVerifier,
    PropertyVerifier,
    ActorVerifier
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
