import { VerifierInterface } from '../../main/api-utilities/VerifierInterface';

describe('Verify that the verifier interface class', () => {
    describe('when the argument', () => {
        test('scenario is not declared throws an error', () => {
            expect(() => {
                new VerifierInterface();
            }).toThrow(Error);
        });

        test('type is not declared throws an error', () => {
            expect(() => {
                new VerifierInterface({actors: []});
            }).toThrow(Error);
        });

        test('type is not in the available cases', () => {
            const verifier = new VerifierInterface({}, 'Inexisten-Type');
            expect(() => {
                verifier.check();
            }).toThrow(Error);
        });
    });

    describe('with weapon type', () => {
        const scenario = {
            actors: [
                {name: 'Marco', type: 'PF Squad Soldier', weapon: 'Handgun'},
                {name: 'RAS1', type: 'Rebel Army soldier', weapon: 'rifle'}],
        };
        const verifier = new VerifierInterface(scenario, 'weapon');

        test('returns true when the weapon can be replaced in a defined actor', () => {
            const weapon = {actor: 'Marco', name: 'shotgun', power: 10, xScope: 10, yScope: 5};
            expect(verifier.check(weapon)).toBe(true);
        });

        test('returns string when the attributes actor, power and scope are not defined in the weapon', () => {
            const weapon = 'gun';
            expect(verifier.check(weapon)).not.toBe(true);
        });

        test('checks that a weapon can not be replaced in an undefined actor', () => {
            const weapon = {name: 'shotgun', power: 10, xScope: 10, yScope: 5};
            expect(verifier.check(weapon)).toBe('actor does not exist');
        });

        test('checks that a weapon can not be replaced when the actor does not exist', () => {
            const weapon = {actor: 'InexistentActor', name: 'shotgun', power: 10, xScope: 10, yScope: 5};
            expect(verifier.check(weapon)).toBe('InexistentActor does not exist');
        });
    });

    describe('with action type', () => {
        const scenario = {
            actors: [
                {name: 'Marco', type: 'PF Squad Soldier', weapon: 'Handgun'},
                {name: 'RAS1', type: 'Rebel Army soldier', weapon: 'rifle'}],
        };
        const verifier = new VerifierInterface(scenario, 'action');

        test('returns true when the action can be executed in the escenario', () => {
            const action = {actor: 'Marco', action: 'shoot weapon', target: 'east', scenes: 100};
            expect(verifier.check(action)).toBe(true);
        });

        test('returns string when the attributes actor and action are not defined in the action', () => {
            const action = 'genericAction';
            expect(verifier.check(action)).toBe('actor does not exist');
        });

        test('return string when an action does not have element, from or target attributes are not defined', () => {
            const action = {actor: 'Marco', action: 'Pick shotgun', scenes: 100};
            expect(verifier.check(action)).toBe('Element, from or target not defined in action');
        });

        test('return string when the actor in the action does not exist', () => {
            const action = {actor: 'Inexistent Actor', action: 'Pick shotgun', element: 'shotgun', scenes: 100};
            expect(verifier.check(action)).toBe('Inexistent Actor does not exist');
        });

        test('return string when the target is unavailable', () => {
            const action = {actor: 'Marco', action: 'shoot shotgun', target: 'front', scenes: 100};
            expect(verifier.check(action)).toBe('target defined in an unavailable direction');
        });

        test('return string when the scenes attribute is not defined', () => {
            const action = {actor: 'Marco', action: 'shoot shotgun', target: 'west'};
            expect(verifier.check(action)).toBe('scenes does not exist');
        });
    });

    describe('with actor type', () => {
        const verifier = new VerifierInterface({}, 'actor');

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
    });

    describe('with scenario type', () => {
        test('returns true when the scenario is able to execute', () => {
            const scenario = {
                scenes: 5,
                actors: [{
                    name: 'Marco',
                    type: 'PF Squad Soldier',
                    health: 1,
                    weapon: {name: 'shotgun', power: 10, xScope: 10, yScope: 5},
                    position: {xPos: 0, yPos: 0}
                }, {
                    name: 'RAS1',
                    type: 'Rebel Army soldier',
                    health: 1,
                    weapon: {name: 'rifle', power: 1, xScope: 1, yScope: 1},
                    position: { xPos: 100, yPos: 0}
                }, {
                    name: 'RAS2',
                    type: 'Rebel Army soldier',
                    health: 1,
                    weapon: {name: 'rifle', power: 1, xScope: 1, yScope: 1},
                    position: {xPos: 5, yPos: 5}
                }],

                actions: [
                    {actor: 'Marco', action: 'shot weapon', target: 'east'}
                ]
            };
            const verifier = new VerifierInterface(scenario, 'scenario');

            expect(verifier.check()).toBe(true);
        });

        test('returns string when the actors attribute in scenario does not exist', () => {
            const scenario = {
                scenes: 5,
                actions: [
                    {actor: 'Marco', action: 'shoot weapon', target: 'east'}
                ]
            };
            const verifier = new VerifierInterface(scenario, 'scenario');

            expect(verifier.check()).toBe('actors does not exist');
        });

        test('returns string when the action has an actor that does not exist', () => {
            const scenario = {
                scenes: 5,
                actors: [{
                    name: 'Marco',
                    type: 'PF Squad Soldier',
                    health: 1,
                    weapon: {name: 'shotgun', power: 10, xScope: 10, yScope: 5},
                    position: {xPos: 0, yPos: 0}
                }, {
                    name: 'RAS1',
                    type: 'Rebel Army soldier',
                    health: 1,
                    weapon: {name: 'rifle', power: 1, xScope: 1, yScope: 1},
                    position: { xPos: 100, yPos: 0}
                }],

                actions: [
                    {actor: 'Inexistent Actor', action: 'shoot weapon', target: 'east'}
                ]
            };
            const verifier = new VerifierInterface(scenario, 'scenario');

            expect(verifier.check()).toBe('Inexistent Actor does not exist');
        });

        test('returns string when the actions attribute in scenario does not exist', () => {
            const scenario = {
                scenes: 5,
                actors: [{
                    name: 'Marco',
                    type: 'PF Squad Soldier',
                    health: 1,
                    weapon: {name: 'shotgun', power: 10, xScope: 10, yScope: 5},
                    position: {xPos: 0, yPos: 0}
                }, {
                    name: 'RAS1',
                    type: 'Rebel Army soldier',
                    health: 1,
                    weapon: {name: 'rifle', power: 1, xScope: 1, yScope: 1},
                    position: { xPos: 100, yPos: 0}
                }, {
                    name: 'RAS2',
                    type: 'Rebel Army soldier',
                    health: 1,
                    weapon: {name: 'rifle', power: 1, xScope: 1, yScope: 1},
                    position: {xPos: 5, yPos: 5}
                }]
            };
            const verifier = new VerifierInterface(scenario, 'scenario');

            expect(verifier.check()).toBe('actions does not exist');
        });

        test('returns string when any attribute in actors does not exist', () => {
            const scenario = {
                scenes: 5,
                actors: [{
                    name: 'Marco',
                    type: 'PF Squad Soldier',
                    position: {xPos: 0, yPos: 0}
                }, {
                    name: 'RAS1',
                    type: 'Rebel Army soldier',
                    position: { xPos: 100, yPos: 0}
                }, {
                    name: 'RAS2',
                    type: 'Rebel Army soldier',
                    position: {xPos: 5, yPos: 5}
                }],

                actions: [
                    {actor: 'Marco', action: 'shoot weapon', target: 'east'}
                ]
            };
            const verifier = new VerifierInterface(scenario, 'scenario');

            expect(verifier.check()).toBe('health does not exist');
        });

        test('returns string when the weapon of any actor is not an object', () => {

            const scenario = {
                scenes: 5,
                actors: [{
                    name: 'Marco',
                    type: 'PF Squad Soldier',
                    health: 1,
                    weapon: 'shotgun',
                    position: {xPos: 0, yPos: 0}
                }, {
                    name: 'RAS1',
                    type: 'Rebel Army soldier',
                    health: 1,
                    weapon: {name: 'rifle', power: 1, xScope: 1, yScope: 1},
                    position: { xPos: 100, yPos: 0}
                }],

                actions: [
                    {actor: 'Marco', action: 'shoot weapon', target: 'east'}
                ]
            };
            const verifier = new VerifierInterface(scenario, 'scenario');

            expect(verifier.check()).toBe('power does not exist');
        });

        test('returns string when any attribute in action does not exist', () => {
            const scenario = {
                scenes: 5,
                actors: [{
                    name: 'Marco',
                    type: 'PF Squad Soldier',
                    health: 1,
                    weapon: {name: 'shotgun', power: 10, xScope: 10, yScope: 5},
                    position: {xPos: 0, yPos: 0}
                }, {
                    name: 'RAS1',
                    type: 'Rebel Army soldier',
                    health: 1,
                    weapon: {name: 'rifle', power: 1, xScope: 1, yScope: 1},
                    position: { xPos: 100, yPos: 0}
                }, {
                    name: 'RAS2',
                    type: 'Rebel Army soldier',
                    health: 1,
                    weapon: {name: 'rifle', power: 1, xScope: 1, yScope: 1},
                    position: {xPos: 5, yPos: 5}
                }],

                actions: [
                    {actor: 'Marco', action: 'shoot weapon'}
                ]
            };
            const verifier = new VerifierInterface(scenario, 'scenario');

            expect(verifier.check()).toBe('Element, from or target not defined in action');
        });

        test('returns string when scenes attribute is not defined', () => {
            const scenario = {
                actors: [{
                    name: 'Marco',
                    type: 'PF Squad Soldier',
                    health: 1,
                    weapon: {name: 'shotgun', power: 10, xScope: 10, yScope: 5},
                    position: {xPos: 0, yPos: 0}
                }, {
                    name: 'RAS1',
                    type: 'Rebel Army soldier',
                    health: 1,
                    weapon: {name: 'rifle', power: 1, xScope: 1, yScope: 1},
                    position: { xPos: 100, yPos: 0}
                }, {
                    name: 'RAS2',
                    type: 'Rebel Army soldier',
                    health: 1,
                    weapon: {name: 'rifle', power: 1, xScope: 1, yScope: 1},
                    position: {xPos: 5, yPos: 5}
                }],

                actions: [
                    {actor: 'Marco', action: 'shoot weapon', target: 'west'}
                ]
            };
            const verifier = new VerifierInterface(scenario, 'scenario');

            expect(verifier.check()).toBe('scenes does not exist');
        });
    });
});