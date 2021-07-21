import { Parser } from './Parser';

describe('Test if given a flag can return a boolean that corresponds if its a valid flag', () => {
    const parserInstance = new Parser();
    test('Given a valid flag returns true', () => {
        expect(parserInstance.isAFlag('-l')).toBe(true);
        expect(parserInstance.isAFlag('-p')).toBe(true);
        expect(parserInstance.isAFlag('-d')).toBe(true);
    });
    test('Given a string that has more than two characters returns false', () => {
        expect(parserInstance.isAFlag('-ps')).toBe(false);
        expect(parserInstance.isAFlag('-lo')).toBe(false);
        expect(parserInstance.isAFlag('-lo')).toBe(false);
    });
    test('Given a negative number returns false', () => {
        expect(parserInstance.isAFlag('-0')).toBe(false);
        expect(parserInstance.isAFlag('-5')).toBe(false);
    });
});

describe('Test if given a list of args the parser sets the correct flags and values', () => {
    test('Given a single flag that has no value returns list with the flags and its value', () => {
        const parserInstance = new Parser();
        parserInstance.setParserArgs(['-p']);
        expect(parserInstance.getParsedArgs()).toEqual([
            { flag: 'p', value: 0 },
        ]);
    });

    test('Given a list of flags with no value it returns a list with the flags and its default value', () => {
        const parserInstance = new Parser();
        parserInstance.setParserArgs(['-l', '-p', '-d']);
        expect(parserInstance.getParsedArgs()).toEqual([
            { flag: 'l', value: false },
            { flag: 'p', value: 0 },
            { flag: 'd', value: '' },
        ]);
    });

    test('Given a list of flags ones with value and others without value and it returns a list with the flags and its correspondig value', () => {
        const parserInstance = new Parser();
        parserInstance.setParserArgs(['-l', '-d', '/usr/logs']);
        expect(parserInstance.getParsedArgs()).toEqual([
            { flag: 'l', value: false },
            { flag: 'd', value: '/usr/logs' },
        ]);
    });
});

describe('Test if given a flag returns the correct parsed value', () => {
    test('Given a flag with value it returns the correct value', () => {
        const parserInstance = new Parser();
        parserInstance.setParserArgs(['-p', 8080]);
        expect(parserInstance.getArgParsedValue('p')).toBe(8080);
    });
});

describe('Test if its not a valid arg throws the correct error', () => {
    const parserInstance = new Parser();
    test('Given a flag that doesnt exist in the schema returns an error', () => {
        expect(() => {
            parserInstance.handleInvalidArgs('w');
        }).toThrow(Error);
        expect(() => {
            parserInstance.handleInvalidArgs('x');
        }).toThrow(Error);
    });

    test('Given an invalid arg throws the specific error', () => {
        expect(() => {
            parserInstance.handleInvalidArgs('p', 'testString');
        }).toThrow(
            TypeError(
                'The argument value {testString} doesnt match the type {number} required for the flag {p}'
            )
        );
        expect(() => {
            parserInstance.handleInvalidArgs('l', '/user');
        }).toThrow(
            TypeError(
                'The argument value {/user} doesnt match the type {boolean} required for the flag {l}'
            )
        );
    });
});
