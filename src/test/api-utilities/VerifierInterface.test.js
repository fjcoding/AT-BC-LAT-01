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
});