import { Parser } from './Parser.js';
import { Schema } from './Schema.js';
import { Args } from './Args.js';
import { expect } from '@jest/globals';

test('Verifies if the Parser class return the values with the correct type', () => {
    const schema = new Schema([
        {name: 'port', flag: '-p', type: 'int', defaultValue: 8080},
        {name: 'path', flag: '-d', type: 'string', defaultValue: '/usr/'},
        {name: 'booleanExample', flag: '-b', type: 'bool', defaultValue: false}
    ]);
    const args = new Args('-p -d -b');
    const parser = new Parser();
    expect(parser.parse(args, schema)).toStrictEqual([
        {flag: '-p', value: 8080},
        {flag: '-d', value: '/usr/'},
        {flag: '-b', value: false}
    ]);
    
    args.putArgs('-p 5000 -d /usr/gomez/ -b true');
    expect(parser.parse(args, schema)).toStrictEqual([
        {flag: '-p', value: 5000},
        {flag: '-d', value: '/usr/gomez/'},
        {flag: '-b', value: true}
    ]);

    args.putArgs('-p -d /usr/');
    expect(parser.parse(args, schema)).toStrictEqual([
        {flag: '-p', value: 8080},
        {flag: '-d', value: '/usr/'}
    ]);
    
    args.putArgs('-p -d /usr/ -m');
    expect( () => { parser.parse(args, schema); }).toThrow(Error('The argument does not exist in the schema'));
});