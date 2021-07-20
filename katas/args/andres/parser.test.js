import { Parser } from './parser';

test('testing splitArgumentValues with null values', () => {
    const obj = new Parser ('');
    expect(obj.returnSchema()).toEqual([]);
});

test('testing splitArgumentValues with a single boolean flag', () => {
    const obj = new Parser ('-l');
    expect(obj.returnSchema()).toEqual(['l']);
});

test('testing splitArgumentValues with a single flag', () => {
    const obj = new Parser ('-p 8080');
    expect(obj.returnSchema()).toEqual(['p','8080']);
});

test('testing splitArgumentValues with negative numbers', () => {
    const obj = new Parser ('-p -8080');
    expect(obj.returnSchema()).toEqual(['p','-8080']);
});

test('testing splitArgumentValues with the Readme example #1', () => {
    const obj = new Parser ('-l -p 8080 -d /usr/logs');
    expect(obj.returnSchema()).toEqual(['l','p','8080','d','/usr/logs']);
});

test('testing splitArgumentValues with the Readme example #1 plus an extra flag with no default value', () => {
    const obj = new Parser ('-l -p 8080 -d /usr/logs -m');
    expect(obj.returnSchema()).toEqual(['l','p','8080','d','/usr/logs','m']);
});

