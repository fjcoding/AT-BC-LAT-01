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

describe('Test if given a flag is valid according with the schema', () => {
    const schemaInstance = new Schema();
    test('Given a flag that exist in the schema returns true', () => {
        expect(schemaInstance.isAValidFlag('p')).toBe(true);
        expect(schemaInstance.isAValidFlag('l')).toBe(true);
        expect(schemaInstance.isAValidFlag('d')).toBe(true);
    });
    test('Given a flag that doesnt exist in the schema returns false', () => {
        expect(schemaInstance.isAValidFlag('a')).toBe(false);
        expect(schemaInstance.isAValidFlag('b')).toBe(false);
        expect(schemaInstance.isAValidFlag('c')).toBe(false);
    });
});

describe('Test if given a flag and its value, the value matches the vale type for that specific flag', () => {
    const schemaInstance = new Schema();
    test('Given a flag and a valid value returns true', () => {
        expect(schemaInstance.isAValidValue('p', 5000)).toBe(true);
        expect(schemaInstance.isAValidValue('l', true)).toBe(true);
        expect(schemaInstance.isAValidValue('d', '/dicetory')).toBe(true);
    });
    test('Given a flag that doesnt exist in the schema returns false', () => {
        expect(schemaInstance.isAValidValue('p', 'a')).toBe(false);
        expect(schemaInstance.isAValidValue('l', 8080)).toBe(false);
        expect(schemaInstance.isAValidValue('d', false)).toBe(false);
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
