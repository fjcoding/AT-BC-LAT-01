import { Schema } from "./Schema";

test('Schema class expected to return a list of flags with values', () => {
    const schema = new Schema();
    expect(schema.getList()).toStrictEqual([
        {name: 'port', flag: '-p', type: 'int', defaultValue: 8080},
        {name: 'path', flag: '-d', type: 'string', defaultValue: '/usr/'},
        {name: 'booleanExample', flag: '-b', type: 'bool', defaultValue: false}
    ])
})