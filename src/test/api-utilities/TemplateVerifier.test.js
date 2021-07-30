import { TemplateVerifier } from '../../main/api-utilities/TemplateVerifier';
import { AttributesVerifier } from '../../main/api-utilities/SinglePropertyVerifier';

describe('Verify that TemplateVerifier', () => {
    test('has scenario and template attributes', () => {
        const templateVerifier = new TemplateVerifier({actos:{}, actions: {}});

        expect(templateVerifier.scenario).not.toBe(undefined);
        expect(templateVerifier.template).not.toBe(undefined);
    });

    test('check that scenario fits the default template', () => {
        const scenario = {
            actors: [
                {name: 'Marco', type: 'PF Squad Soldier', weapon: 'Handgun'},
                {name: 'RAS1', type: 'Rebel Army soldier', weapon: 'rifle'}],
            actions: [
                {actor: 'Marco', action: 'Pick Weapon', element: 'Shotgun'},
                {actor: 'Marco', action: 'Shoot Weapon', element: 'Shotgun'},
                {actor: 'RAS1', action: 'Receive Attack', from: 'Marco'}]
        };

        const templateVerifier = new TemplateVerifier(scenario, new AttributesVerifier);

        expect(templateVerifier.check()).toBe(true);
    });

    test('check that scenario does not fit the default template', () => {
        const scenario = {
            actors: [
                {name: 'Marco', type: 'PF Squad Soldier', weapon: 'Handgun'},
                {name: 'RAS1', type: 'Rebel Army soldier', weapon: 'rifle'}],
            actions: [
                {actor: 'Marco', action: 'Pick Weapon', element: 'Shotgun'},
                {actor: 'Marco', action: 'Shoot Weapon', element: 'Shotgun'},
                {actor: 'RAS1', action: 'Receive Attack'}]
        };

        const templateVerifier = new TemplateVerifier(scenario);

        expect(templateVerifier.check()).not.toBe(true);
    });
});