import { Args } from './args';

describe('Test for method getFlagsPositions()', () => {
    test ('The position method will get us the flags position in the input', () => {
        const argsIntance = new Args;
        expect(argsIntance.argsSplitter('-l -p 8080 -d /usr/logs')).toEqual(['-l', '-p', '8080', '-d', '/usr/logs']);
        expect(argsIntance.argsSplitter('-p 6023 -l -h')).toEqual(['-p', '6023', '-l', '-h']);
    });
}); 