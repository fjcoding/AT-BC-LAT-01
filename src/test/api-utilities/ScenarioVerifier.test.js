import { ScenarioVerifier } from './../../main/api-utilities/ScenarioVerifier';
import { TemplateVerifier } from './../../main/api-utilities/TemplateVerifier';
import { ActorsOfActions } from './../../main/api-utilities/SinglePropertyVerifier';

describe('Verify that ScenarioVerifier', () => {

    test('checks that an scenario fits a template', () => {
        const scenario = {
            actors: [
                {name: 'Marco', type: 'PF Squad Soldier', weapon: 'Handgun'},
                {name: 'RAS1', type: 'Rebel Army soldier', weapon: 'rifle'}],
            actions: [
                {actor: 'Marco', action: 'Pick Weapon', element: 'Shotgun'},
                {actor: 'Marco', action: 'Shoot Weapon', element: 'Shotgun'},
                {actor: 'RAS1', action: 'Receive Attack', from: 'Marco'}]
        };
        const scenarioVerifier = new ScenarioVerifier([new TemplateVerifier(scenario), new TemplateVerifier(scenario)]);

        expect(scenarioVerifier.check()).toBe(true);
    });

    test('checks that an scenario does not fit a template', () => {
        const scenario = {
            actors: [
                {name: 'Marco', type: 'PF Squad Soldier', weapon: 'Handgun'},
                {name: 'RAS1', type: 'Rebel Army soldier', weapon: 'rifle'}],
            actions: [
                {actor: 'Marco', action: 'Pick Weapon', element: 'Shotgun'},
                {actor: 'Marco', action: 'Shoot Weapon', element: 'Shotgun'},
                {actor: 'RAS1', action: 'Receive Attack'}]
        };
        const scenarioVerifier = new ScenarioVerifier(new TemplateVerifier(scenario));

        expect(scenarioVerifier.check()).not.toBe(true);
    });

    test('checks that an scenario fits a template and actors of actions are declared', () => {
        const scenario = {
            actors: [
                {name: 'Marco', type: 'PF Squad Soldier', weapon: 'Handgun'},
                {name: 'RAS1', type: 'Rebel Army soldier', weapon: 'rifle'}],
            actions: [
                {actor: 'Marco', action: 'Pick Weapon', element: 'Shotgun'},
                {actor: 'Marco', action: 'Shoot Weapon', element: 'Shotgun'},
                {actor: 'RAS1', action: 'Receive Attack', from: 'Marco'}]
        };
        const scenarioVerifier = new ScenarioVerifier([new TemplateVerifier(scenario), new ActorsOfActions(scenario)]);

        expect(scenarioVerifier.check()).toBe(true);
    });

    test('checks that an scenario fits a template but actors of actions are not declared', () => {
        const scenario = {
            actors: [
                {name: 'Marco', type: 'PF Squad Soldier', weapon: 'Handgun'},
                {name: 'RAS1', type: 'Rebel Army soldier', weapon: 'rifle'}],
            actions: [
                {actor: 'Juan', action: 'Pick Weapon', element: 'Shotgun'},
                {actor: 'Juan', action: 'Shoot Weapon', element: 'Shotgun'},
                {actor: 'RAS1', action: 'Receive Attack', from: 'Marco'}]
        };
        const scenarioVerifier = new ScenarioVerifier([new TemplateVerifier(scenario), new ActorsOfActions(scenario)]);

        expect(scenarioVerifier.check()).toBe('Juan actor does not exist');
    });

});