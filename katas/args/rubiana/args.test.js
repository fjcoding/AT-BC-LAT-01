import { schemaClass } from './args.js';

test("validFlag() check if the flag exists in our schema", () => {
    const schemaClassInstance = new schemaClass;
    expect(schemaClassInstance.validFlag('p')).toBe(true);
    expect(schemaClassInstance.validFlag('8')).toBe('Invalid! The Flag does not exist.');
    expect(schemaClassInstance.validFlag('-10')).toBe('Invalid! The Flag does not exist.');
});

test("splitInputStr() transforms the String input into an array", () => {
    const schemaClassInstance = new schemaClass;
    expect(schemaClassInstance.splitInputStr('-l -p 8080 -d /usr/logs')).toEqual(['-l', '-p', '8080', '-d', '/usr/logs']);
});

test("defaultValue() returns the default value of a flag", () => {
    const schemaClassInstance = new schemaClass;
    expect(schemaClassInstance.defaultValue('l')).toBe(false);
    expect(schemaClassInstance.defaultValue('p')).toBe(0);
    expect(schemaClassInstance.defaultValue('d')).toBe("");
});

test("flagIndex() returns the index of the flag in our schema", () => {
    const schemaClassInstance = new schemaClass;
    expect(schemaClassInstance.flagIndex('l')).toBe(0);
    expect(schemaClassInstance.flagIndex('p')).toBe(1);
    expect(schemaClassInstance.flagIndex('d')).toBe(2);
});