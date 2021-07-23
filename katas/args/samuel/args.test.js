import { Args } from './args';

describe('Test for method argsSplitter', () => {
    test ('The method have to split the input', () => {
        const argsIntance = new Args;
        expect(argsIntance.argsSplitter('-l -p 8080 -d /usr/logs')).toEqual(['-l', '-p', '8080', '-d', '/usr/logs']);
        expect(argsIntance.argsSplitter('-p 6023 -l -h')).toEqual(['-p', '6023', '-l', '-h']);
    });
}); 
describe('Test for method getFlagsPositions', () => {
    test('The position method will get us the flags position in the input', () => {
        const argsIntance = new Args;
        expect(argsIntance.getFlagsPosition(['-l', '-p', '8080', '-d', '/usr/logs'])).toEqual([0, 1, 3]);
        expect(argsIntance.getFlagsPosition(['-p', '6023', '-l', '-h'])).toEqual([0, 2, 3]);
    });
});