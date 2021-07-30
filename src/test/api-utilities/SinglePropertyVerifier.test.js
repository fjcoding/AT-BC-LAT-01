import { SinglePropertyVerifier, AttributesVerifier } from '../../main/api-utilities/SinglePropertyVerifier';

describe('Verify that SinglePropertyVerifier class', () => {
    test('has Scenario attribute', () => {
        const singleVerifier = new SinglePropertyVerifier({actors: [], actions: []});
        expect(singleVerifier.scenario).not.toBe(undefined);
    });
});

describe('Verify that AttributesVerifier class', () => {
    test('has scenario and attributes (default value) attributes', () => {
        const attributeVerifier = new AttributesVerifier({actors: [], actions: []});

        expect(attributeVerifier.scenario).not.toBe(undefined);
        expect(attributeVerifier.attributes).not.toBe(undefined);
    });

    test('check that the scenario has Actors and Actions attributes', () => {
        const attributeVerifier = new AttributesVerifier({actors: [], actions: []});

        expect(attributeVerifier.check()).toBe(true);
    });

    test('check that the scenario does not have dummyAttr attributes', () => {
        const attributeVerifier = new AttributesVerifier({actors: [], actions: []}, 'dummyAttr');

        expect(attributeVerifier.check()).toBe('The scenario does not have dummyAttr attribute');
    });

});