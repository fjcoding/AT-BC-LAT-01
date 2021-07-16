import { Schema } from './Schema';

describe('Test if the class can return the list of schema arguments', () => {
    const schemaInstance = new Schema();

    test('Returns the schema values (To fix on the next iteration)', () => {
        expect(schemaInstance.getSchemaArgsList()).toEqual([
            {
                flag: 'l',
                name: 'logging',
                type: 'boolean',
                defaultValue: false,
            },
            {
                flag: 'p',
                name: 'port',
                type: 'number',
                defaultValue: 0,
            },
            {
                flag: 'd',
                name: 'directory',
                type: 'string',
                defaultValue: '',
            },
        ]);
    });
});

describe('Test if given a flag can return if its a value that exist on the schema and counts as a valid Arg', () => {
    const schemaInstance = new Schema();
    test('Given a flag that exist in the schema returns true', () => {
        expect(schemaInstance.isAValidArg('p', 0)).toBe(true);
        expect(schemaInstance.isAValidArg('l', true)).toBe(true);
    });

    test('Given a flag that doesnt exist in the schema returns an error', () => {
        expect(() => {
            schemaInstance.isAValidArg('w');
        }).toThrow(Error);
        expect(() => {
            schemaInstance.isAValidArg('x');
        }).toThrow(Error);
    });
    test('Given an invalid arg throws the specific error', () => {
        expect(() => {
            schemaInstance.isAValidArg('w');
        }).toThrow('The w flag its NOT recognized by the schema');
        expect(() => {
            schemaInstance.isAValidArg('p', 'testString');
        }).toThrow(
            TypeError(
                'The argument value {testString} doesnt match the type {number} required for the flag {p}'
            )
        );
    });
});

describe('Test if given a flag can return the correct default value', () => {
    const schemaInstance = new Schema();
    test('Given a value that exist on the schema returns the correct default value', () => {
        expect(schemaInstance.getDefaultValue('p')).toBe(0);
        expect(schemaInstance.getDefaultValue('l')).toBe(false);
        expect(schemaInstance.getDefaultValue('d')).toBe('');
    });
});

describe('Test if given a flag can return the correct flag type', () => {
    const schemaInstance = new Schema();
    test('Given value that exist on the schema returns the correct flag type', () => {
        expect(schemaInstance.getFlagType('p')).toBe('number');
        expect(schemaInstance.getFlagType('l')).toBe('boolean');
    });
});
