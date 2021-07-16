import { Parser } from './Parser';

describe('Test if given a flag can return a boolean that corresponds if its a valid flag ', () => {
    const parserInstance = new Parser();
    test('Test if given a valid flag returns true', () => {
        expect(parserInstance.isAFlag('-l')).toBe(true);
        expect(parserInstance.isAFlag('-p')).toBe(true);
        expect(parserInstance.isAFlag('-d')).toBe(true);
    });
    test('Test if given a string that has more than two characters returns false', () => {
        expect(parserInstance.isAFlag('-ps')).toBe(false);
        expect(parserInstance.isAFlag('-lo')).toBe(false);
        expect(parserInstance.isAFlag('-lo')).toBe(false);
    });
    test('Test if given a negative number returns false', () => {
        expect(parserInstance.isAFlag('-0')).toBe(false);
        expect(parserInstance.isAFlag('-5')).toBe(false);
    });
});

describe('Test if given a list of args the parser sets the correct flags and values', () => {
    test('Test if given a single flag that has no value returns list with the flags and its value', () => {
        const parserInstance = new Parser();
        parserInstance.setParserArgs(['-p']);
        expect(parserInstance.getParsedArgs()).toEqual([
            { flag: 'p', value: 0 },
        ]);
    });

    test('Test if given a list of flags with no value it returns a list with the flags and its default value ', () => {
        const parserInstance = new Parser();
        parserInstance.setParserArgs(['-l', '-p', '-d']);
        expect(parserInstance.getParsedArgs()).toEqual([
            { flag: 'l', value: false },
            { flag: 'p', value: 0 },
            { flag: 'd', value: '' },
        ]);
    });

    test('Test if given a list of flags ones with value and others without value and it returns a list with the flags and its correspondig value', () => {
        const parserInstance = new Parser();
        parserInstance.setParserArgs(['-l', '-d', '/usr/logs']);
        expect(parserInstance.getParsedArgs()).toEqual([
            { flag: 'l', value: false },
            { flag: 'd', value: '/usr/logs' },
        ]);
    });
});

describe('Test if given a flag returns the correct parsed value', () => {
    test('Test if given a flag with value it returns the correct value', () => {
        const parserInstance = new Parser();
        parserInstance.setParserArgs(['-p', 8080]);
        expect(parserInstance.getArgParsedValue('p')).toBe(8080);
    });
});
