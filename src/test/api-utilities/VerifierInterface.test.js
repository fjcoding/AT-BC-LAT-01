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
});