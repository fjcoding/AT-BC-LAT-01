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
    test ('The method have to tell us if the comman-line is valid or not using the array that has the flags and valueType', () => {
        const argsIntance = new Parser;
        expect(argsIntance.schemaValidation(['l boolean', 'p number', 'd string', 'h boolean'], ['p number', 'd string'])).toEqual(true);
        expect(argsIntance.schemaValidation(['l boolean', 'p number', 'd string', 'h boolean'], ['f number', 'd string'])).toEqual(false);
        expect(argsIntance.schemaValidation(['l boolean', 'p number', 'd string', 'h boolean'], [])).toEqual(false);
    });
    test ('The method will print the command-line input parsed depending on the validation', () => {
        const argsIntance = new Parser;
        expect(argsIntance.showArgsSchema(true, [
            { flag: 'p', value: 6023, valueType: 'number' },
            { flag: 'l', value: true, valueType: 'boolean' },
            { flag: 'h', value: true, valueType: 'boolean' }
        ])).toEqual([
            { flag: 'p', value: 6023, valueType: 'number' },
            { flag: 'l', value: true, valueType: 'boolean' },
            { flag: 'h', value: true, valueType: 'boolean' }
        ]);
        expect(argsIntance.showArgsSchema(false, [
            { flag: 's', value: 6023, valueType: 'string' },
            { flag: 'l', value: true, valueType: 'boolean' },
            { flag: 'h', value: true, valueType: 'boolean' }
        ])).toEqual('Error, the flag in command-line doesn\'t exist');
    });
});
