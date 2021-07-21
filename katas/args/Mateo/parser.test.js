import { Parser } from './parser';

describe('Test for class Parser', () => {
    test ('The method have to create and appropiate array like the one in the schema and put the flag, value and type as attributes', () => {
        const parserInstance = new Parser;
        expect(parserInstance.createArgsSchema(['-l', '-p', '8080', '-d', '/usr/logs'], [0, 1, 3])).toEqual([
            { flag: 'l', value: true, valueType: 'boolean' },
            { flag: 'p', value: 8080, valueType: 'number' },
            { flag: 'd', value: '/usr/logs', valueType: 'string' }
        ]);
        expect(parserInstance.createArgsSchema(['-p', '6023', '-l'], [0, 2])).toEqual([
            { flag: 'p', value: 6023, valueType: 'number' },
            { flag: 'l', value: true, valueType: 'boolean' },
        ]);
    });
    test ('The method have to tell us if the comman-line is valid or not using the array that has the flags and valueType', () => {
        const parserInstance = new Parser;
        expect(parserInstance.schemaValidation(['l boolean', 'p number', 'd string'], ['p number', 'd string'])).toEqual(true);
        expect(parserInstance.schemaValidation(['l boolean', 'p number', 'd string'], ['f number', 'd string'])).toEqual(false);
        expect(parserInstance.schemaValidation(['l boolean', 'p number', 'd string'], [])).toEqual(false);
    });
    test ('the method will print the flag and value', () => {
        const parserInstance = new Parser;
        expect(parserInstance.flagAndValue([
            { flag: 'l', value: true, valueType: 'boolean' },
            { flag: 'p', value: 8080, valueType: 'number' },
            { flag: 'd', value: '/usr/logs', valueType: 'string' }
        ])).toEqual([
            'l true',
            'p 8080',
            'd /usr/logs'
        ]);
    });
    test ('The method will print the command-line input parsed depending on the validation', () => {
        const parserInstance = new Parser;
        expect(parserInstance.showArgsFlagAndValue(true, [
            'p 8596',
            'l true'
        ])).toEqual([
            'p 8596',
            'l true'
        ]);
        expect(parserInstance.showArgsFlagAndValue(false, [
            's 8596',
            'l true' 
        ])).toEqual('Error, the flag in command-line doesn\'t exist');
    });
});