import { Parser } from './parser';

describe('Test for method createArgsSchema()', () => {
    test ('The method have to create and appropiate array like the one in the schema and put the flag, value and type as attributes', () => {
        const argsIntance = new Parser;
        expect(argsIntance.createArgsSchema(['-l', '-p', '8080', '-d', '/usr/logs'], [0, 1, 3])).toEqual([
            { flag: 'l', value: true, valueType: 'boolean' },
            { flag: 'p', value: 8080, valueType: 'number' },
            { flag: 'd', value: '/usr/logs', valueType: 'string' }
        ]);
        expect(argsIntance.createArgsSchema(['-p', '6023', '-l', '-h'], [0, 2, 3])).toEqual([
            { flag: 'p', value: 6023, valueType: 'number' },
            { flag: 'l', value: true, valueType: 'boolean' },
            { flag: 'h', value: true, valueType: 'boolean' }
        ]);
    });
});
