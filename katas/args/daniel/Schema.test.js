import { Schema } from "./Schema";
import { Args } from "./Args";

test('Schema class expected to return a list of flags with values according to the setted schema', () => {
    const schema = new Schema([
        {name: 'port', flag: '-p', type: 'int', defaultValue: 8080},
        {name: 'path', flag: '-d', type: 'string', defaultValue: '/usr/'},
        {name: 'booleanExample', flag: '-b', type: 'bool', defaultValue: false}
    ]);
    expect(schema.getList()).toStrictEqual([
        {name: 'port', flag: '-p', type: 'int', defaultValue: 8080},
        {name: 'path', flag: '-d', type: 'string', defaultValue: '/usr/'},
        {name: 'booleanExample', flag: '-b', type: 'bool', defaultValue: false}
    ]);

    schema.putSchema([
        {name: 'port', flag: '-p', type: 'int', defaultValue: 8080},
        {name: 'path', flag: '-d', type: 'string', defaultValue: '/usr/'}
    ]);
    expect(schema.getList()).toStrictEqual([
        {name: 'port', flag: '-p', type: 'int', defaultValue: 8080},
        {name: 'path', flag: '-d', type: 'string', defaultValue: '/usr/'},
    ]);
});

test('Schema class is expected to validate if a list of args match with the schema', () => {
    const schema = new Schema([
        {name: 'port', flag: '-p', type: 'int', defaultValue: 8080},
        {name: 'path', flag: '-d', type: 'string', defaultValue: '/usr/'},
        {name: 'booleanExample', flag: '-b', type: 'bool', defaultValue: false}
    ]);
    
    const args = new Args('-p -d -b');
    expect(schema.validateSchema(args.getArgsList())).toBe(true);

    args.putArgs('-i -e');
    expect(schema.validateSchema(args.getArgsList())).toBe(false);
    
    args.putArgs('-p');
    expect(schema.validateSchema(args.getArgsList())).toBe(true);
    
    args.putArgs('-p -e');
    expect(schema.validateSchema(args.getArgsList())).toBe(false);
});

test('Schema class is expected to return a required property of a flag', () => {
    const schema = new Schema([
        {name: 'port', flag: '-p', type: 'int', defaultValue: 8080},
        {name: 'path', flag: '-d', type: 'string', defaultValue: '/usr/'},
        {name: 'booleanExample', flag: '-b', type: 'bool', defaultValue: false}
    ]);
    expect(schema.getPropertyOfArg('-p', 'defaultValue')).toBe(8080);
    expect(schema.getPropertyOfArg('-p', 'type')).toBe('int');
    expect(schema.getPropertyOfArg('-d', 'name')).toBe('path');
    expect(schema.getPropertyOfArg('-b', 'defaultValue')).toBe(false);
});