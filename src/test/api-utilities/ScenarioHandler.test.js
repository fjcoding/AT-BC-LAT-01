import { ScenarioHandler } from '../../main/api-utilities/ScenarioHandler';

describe('Verify that ScenarioHandler', () => {
    test('has scenario attribute', () => {
        const scenarioHandler = new ScenarioHandler();
        expect(scenarioHandler.scenario).not.toBe(undefined);
    });

    test('is created with an scenario as an input', () => {
        const scenario = {
            actors: [],
            actions: []
        };
        const scenarioHandler = new ScenarioHandler(scenario);
        expect(scenarioHandler.scenario).toBe(scenario);
    });

    test('pushes a new actor in the actors array', () => {
        const scenario = {
            actors: [
                {name: 'Marco', type: 'PF Squad Soldier', health: 1},
                {name: 'RAS1', type: 'Rebel Army soldier', health: 1}
            ],
        };
        const scenarioHandler = new ScenarioHandler(scenario);
        const newActor = {name: 'RAS2', type: 'Rebel Army soldier', health: 2};

        scenarioHandler.pushAttribute(newActor, 'actors');
        expect(scenarioHandler.scenario.actors).toEqual([
            {name: 'Marco', type: 'PF Squad Soldier', health: 1},
            {name: 'RAS1', type: 'Rebel Army soldier', health: 1},
            {name: 'RAS2', type: 'Rebel Army soldier', health: 2}
        ]);
    });

    test('pushes and creates a new actors array attribute', () => {
        const scenarioHandler = new ScenarioHandler();
        const newActor = {name: 'RAS2', type: 'Rebel Army soldier', health: 2};

        scenarioHandler.pushAttribute(newActor, 'actors');
        expect(scenarioHandler.scenario.actors).toEqual([
            {name: 'RAS2', type: 'Rebel Army soldier', health: 2}
        ]);
    });

    test('pushes a new action in the actions array', () => {
        const scenario = {
            actions: [
                {actor: 'Marco', use: 'weapon', target: 'east'},
                {actor: 'RAS1', use: 'weapon', target: 'west'}
            ],
        };
        const scenarioHandler = new ScenarioHandler(scenario);
        const newAction = {actor: 'RAS2', use: 'weapon', target: 'west'};

        scenarioHandler.pushAttribute(newAction, 'actions');
        expect(scenarioHandler.scenario.actions).toEqual([
            {actor: 'Marco', use: 'weapon', target: 'east'},
            {actor: 'RAS1', use: 'weapon', target: 'west'},
            {actor: 'RAS2', use: 'weapon', target: 'west'}
        ]);
    });

    test('pushes and creates a new actions array attribute', () => {
        const scenarioHandler = new ScenarioHandler();
        const newAction = {name: 'RAS2', type: 'Rebel Army soldier', health: 2};

        scenarioHandler.pushAttribute(newAction, 'actions');
        expect(scenarioHandler.scenario.actions).toEqual([
            {name: 'RAS2', type: 'Rebel Army soldier', health: 2}
        ]);
    });

    test('replaces a weapon in a defined actor', () => {
        const scenario = {
            actors: [
                {name: 'Marco', type: 'PF Squad Soldier', health: 1, weapon: 'generic gun'},
                {name: 'RAS1', type: 'Rebel Army soldier', health: 1, weapon: 'generic gun'}
            ],
        };
        const scenarioHandler = new ScenarioHandler(scenario);
        const newWeapon = {name: 'handgun', power: 1, xScope: 1, yScope: 1};

        scenarioHandler.replaceWeapon(newWeapon, 'Marco');
        expect(scenarioHandler.scenario).toEqual({
            actors: [
                {name: 'Marco', type: 'PF Squad Soldier', health: 1, weapon: {name: 'handgun', power: 1, xScope: 1, yScope: 1}},
                {name: 'RAS1', type: 'Rebel Army soldier', health: 1, weapon: 'generic gun'}
            ],
        });
    });

    test('does not replace a weapon when the actor is not defined', () => {
        const scenario = {
            actors: [
                {name: 'Marco', type: 'PF Squad Soldier', health: 1, weapon: 'generic gun'},
                {name: 'RAS1', type: 'Rebel Army soldier', health: 1, weapon: 'generic gun'}
            ],
        };
        const scenarioHandler = new ScenarioHandler(scenario);
        const newWeapon = {name: 'handgun', power: 1, xScope: 1, yScope: 1};

        scenarioHandler.replaceWeapon(newWeapon, 'NodDefinedActor');
        expect(scenarioHandler.scenario).toEqual(scenario);
    });

    test('throws error when the actors attribute is not defined', () => {
        const scenarioHandler = new ScenarioHandler();
        const newWeapon = {name: 'handgun', power: 1, xScope: 1, yScope: 1};
        expect(() => {
            scenarioHandler.replaceWeapon(newWeapon, 'Marco');
        }).toThrow(Error);
    });

    test('replaces an specified attribute in the scenario', () => {
        const scenario = { actors: [], actions: [], scenes: 0 };
        const handler = new ScenarioHandler(scenario);
        const newScenes = 5;
        handler.replaceAttribute(newScenes, 'scenes');
        expect(handler.scenario)
            .toEqual({ actors: [], actions: [], scenes: newScenes });
    });
    
    test('creates a new attribute in the scenario when it did not existed', () => {
        const scenario = { actors: [], actions: [] };
        const handler = new ScenarioHandler(scenario);
        const newScenes = 5;
        handler.replaceAttribute(newScenes, 'scenes');
        expect(handler.scenario)
            .toEqual({ actors: [], actions: [], scenes: newScenes });
    });
    
    test('throws error when try to replace a not specified attribute in the scenario', () => {
        const scenario = { actors: [], actions: [], scenes: undefined };
        const handler = new ScenarioHandler(scenario);
        const newScenes = 5;
        
        expect(() => {
            handler.replaceAttribute(newScenes);
        }).toThrow(Error);
    });
});