import { Args } from './args';

describe('Test for method stringSplitter', () => {
    test ('The method have to split the input', () => {
        const argsInstance = new Args;
        expect(argsInstance.stringSplitter('-l -p 8080 -d /usr/logs')).toEqual(['-l', '-p', '8080', '-d', '/usr/logs']);
        expect(argsInstance.stringSplitter('-p 6023 -l')).toEqual(['-p', '6023', '-l']);
    });
});
describe('Test for method getFlagsPositions', () => {
    test('The position method will get us the flags position in the input', () => {
        const argsInstance = new Args;
        expect(argsInstance.getFlagsPosition(['-l', '-p', '8080', '-d', '/usr/logs'])).toEqual([0, 1, 3]);
        expect(argsInstance.getFlagsPosition(['-p', '6023', '-l'])).toEqual([0, 2]);
    });
});