import { SinglePropertyVerifier, AttributesVerifier, ActorsOfActions } from '../../main/api-utilities/SinglePropertyVerifier';

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

describe('Verify that ActorsOfActions', () => {
    test('check that in the actions all the actors are declared in the actor object', () => {
        const scenario = {
            actors: [
                {name: 'Marco', type: 'PF Squad Soldier', weapon: 'Handgun'},
                {name: 'RAS1', type: 'Rebel Army soldier', weapon: 'rifle'}],
            actions: [
                {actor: 'Marco', action: 'Pick Weapon', element: 'Shotgun'},
                {actor: 'Marco', action: 'Shoot Weapon', element: 'Shotgun'},
                {actor: 'RAS1', action: 'Receive Attack', from: 'Marco'}]
        };

        const verifier = new ActorsOfActions(scenario);
        expect(verifier.check()).toBe(true);
    });

    test('check that in the actions all the actors are not declared in the actor object', () => {
        const scenario = {
            actors: [
                {name: 'Marco', type: 'PF Squad Soldier', weapon: 'Handgun'},
                {name: 'RAS1', type: 'Rebel Army soldier', weapon: 'rifle'}],
            actions: [
                {actor: 'Juan', action: 'Pick Weapon', element: 'Shotgun'},
                {actor: 'Juan', action: 'Shoot Weapon', element: 'Shotgun'},
                {actor: 'RAS1', action: 'Receive Attack', from: 'Marco'}]
        };

        const verifier = new ActorsOfActions(scenario);
        expect(verifier.check()).toBe('Juan actor does not exist');
    });
});