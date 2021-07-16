import { Parser } from "./parser";

describe('Test for method getFlagsPositions()', () => {
    test ('The position method will get us the flags position in the input', () => {
        const argsIntance = new Parser;
        let split = argsIntance.argsSplitter('-l -p 8080 -d /usr/logs');
        expect(argsIntance.getFlagsPosition(split)).toEqual([0, 1, 3]);
    })
})
describe('Test for method createArgsSchema()', () => {
    test ('The method have to create and appropiate object like the one in the schema and put the value and trype as attributes', () => {
        const argsIntance = new Parser;
        let split = argsIntance.argsSplitter('-l -p 8080 -d /usr/logs');
        let flagPositions = argsIntance.getFlagsPosition(split);
        expect(argsIntance.createArgsSchema(split, flagPositions)).toEqual({
            l: { value: true, valueType: 'boolean' },
            p: { value: 8080, valueType: 'number' },
            d: { value: '/usr/logs', valueType: 'string' }
        })
    })
})
