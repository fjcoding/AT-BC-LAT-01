import { Flag } from './Flag.js';
import { Schema } from './Schema.js';
import { Parser } from './Parser.js';
test('Validate if separateArguments separate each fields by an space when a value is missing next to a character', () => {
    const parser = new Parser();
    expect(parser.separateArguments('-l -d /usr/logs')).toEqual(['-l', '-d', '/usr/logs']);
});
test('Validate if separateArguments separate each fields by an space', () => {
    const parser = new Parser();
    expect(parser.separateArguments('-l true -d /usr/logs')).toEqual(['-l', 'true', '-d', '/usr/logs']);
});
test('Validate if checkIfItsFlag can determinate if its a flag or not when the flag its for Loggin', () => {
    const parser = new Parser();
    let schemaL = new Schema('-l', false, 'boolean');
    let schemaP = new Schema('-p', 0, 'number');
    let schemaD = new Schema('-d', 'qwe', 'string');
    const schema = [schemaL, schemaP, schemaD];
    expect(parser.checkIfItsFlag('-l', schema)).toBe(true);
});
test('Validate if checkIfItsFlag can determinate if its a flag or not when the flag its for Directory', () => {
    const parser = new Parser();
    let schemaL = new Schema('-l', false, 'boolean');
    let schemaP = new Schema('-p', 0, 'number');
    let schemaD = new Schema('-d', 'qwe', 'string');
    const schema = [schemaL, schemaP, schemaD];
    expect(parser.checkIfItsFlag('-d', schema)).toBe(true);
});
test('Validate if checkIfItsFlag can determinate if its a flag or not when the flag its for Port', () => {
    const parser = new Parser();
    let schemaL = new Schema('-l', false, 'boolean');
    let schemaP = new Schema('-p', 0, 'number');
    let schemaD = new Schema('-d', 'qwe', 'string');
    const schema = [schemaL, schemaP, schemaD];
    expect(parser.checkIfItsFlag('-p', schema)).toBe(true);
});
test('Validate if checkIfItsEmpty can determinate if value of the flag for Directory its empty', () => {
    const parser = new Parser();
    const flag1 = new Flag('-d', null);
    expect(parser.checkIfItsEmpty(flag1.value)).toBe(true);
});
test('Validate if checkIfItsEmpty can determinate if value of the flag Port its empty', () => {
    const parser = new Parser();
    const flag2 = new Flag('-p',);
    expect(parser.checkIfItsEmpty(flag2.value)).toBe(true);
});
test('Validate if checkIfItsEmpty can determinate if value of the flag Logging its empty', () => {
    const parser = new Parser();
    const flag3 = new Flag('-l');
    expect(parser.checkIfItsEmpty(flag3.value)).toBe(true);
});
test('Validate if checkIfItsEmpty can determinate if value of the flag Logging its not empty', () => {
    const parser = new Parser();
    const flag3 = new Flag('-l',true);
    expect(parser.checkIfItsEmpty(flag3.value)).toBe(false);
});
test('Validate if replaceDefaultValue can replace the empty value of the flag for a default value of Directory', () => {
    const parser = new Parser();
    const flag1 = new Flag('-d', null);
    let schemaL = new Schema('-l', false, 'boolean');
    let schemaP = new Schema('-p', 0, 'number');
    let schemaD = new Schema('-d', 'qwe', 'string');
    const schema = [schemaL, schemaP, schemaD];
    const actualResult = parser.replaceDefaultValue(flag1, schema);
    const expectedResult = { 'character': '-d', 'value': 'qwe' };
    expect(actualResult).toEqual(expectedResult);
});
test('Validate if replaceDefaultValue can replace the empty value of the flag for a default value of Port', () => {
    const parser = new Parser();
    const flag2 = new Flag('-p',);
    let schemaL = new Schema('-l', false, 'boolean');
    let schemaP = new Schema('-p', 0, 'number');
    let schemaD = new Schema('-d', 'qwe', 'string');
    const schema = [schemaL, schemaP, schemaD];
    const actualResult = parser.replaceDefaultValue(flag2, schema);
    const expectedResult = { 'character': '-p', 'value': 0 };
    expect(actualResult).toEqual(expectedResult);
});
test('Validate if replaceDefaultValue can replace the empty value of the flag for a default value of Loggin', () => {
    const parser = new Parser();
    const flag3 = new Flag('-l');
    let schemaL = new Schema('-l', false, 'boolean');
    let schemaP = new Schema('-p', 0, 'number');
    let schemaD = new Schema('-d', 'qwe', 'string');
    const schema = [schemaL, schemaP, schemaD];
    const actualResult = parser.replaceDefaultValue(flag3, schema);
    const expectedResult = { 'character': '-l', 'value': false };
    expect(actualResult).toEqual(expectedResult);
});
test('Validate if itsAValidValue can compare the types of  String value of a flag with the schema value', () => {
    const parser = new Parser();
    const flag1 = new Flag('-d', '/usr/logs');
    let schemaL = new Schema('-l', false, 'boolean');
    let schemaP = new Schema('-p', 0, 'number');
    let schemaD = new Schema('-d', 'qwe', 'string');
    const schema = [schemaL, schemaP, schemaD];
    expect(parser.itsAValidValue(schema, flag1)).toBe(true);
});

test('Validate if itsAValidValue can compare the types of  Number value of a flag with the schema value', () => {
    const parser = new Parser();
    const flag2 = new Flag('-p', 8080);
    let schemaL = new Schema('-l', false, 'boolean');
    let schemaP = new Schema('-p', 0, 'number');
    let schemaD = new Schema('-d', 'qwe', 'string');
    const schema = [schemaL, schemaP, schemaD];
    expect(parser.itsAValidValue(schema, flag2)).toBe(true);
});
test('Validate if itsAValidValue can compare the types of  Boolean value of a flag with the schema value', () => {
    const parser = new Parser();
    const flag3 = new Flag('-l', false);
    let schemaL = new Schema('-l', false, 'boolean');
    let schemaP = new Schema('-p', 0, 'number');
    let schemaD = new Schema('-d', 'qwe', 'string');
    const schema = [schemaL, schemaP, schemaD];
    expect(parser.itsAValidValue(schema, flag3)).toBe(true);
});

test('Validate if itsAValidValue can compare the types of  Strin value of a flag with the schema value', () => {
    const parser = new Parser();
    let schemaL = new Schema('-l', false, 'boolean');
    let schemaP = new Schema('-p', 0, 'number');
    let schemaD = new Schema('-d', 'qwe', 'string');
    const schema = [schemaL, schemaP, schemaD];
    let arg = parser.separateArguments('-l -p 8080 -d /usr/logs');
    const actualResult = parser.assignFlag(arg, schema);
    const expectedResult = [new Flag('-l',),
        new Flag('-p', '8080'),
        new Flag('-d', '/usr/logs')];
    expect(actualResult).toStrictEqual(expectedResult);
});