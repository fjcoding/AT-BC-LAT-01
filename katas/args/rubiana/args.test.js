import { schemaClass } from './args.js';
import { parserClass } from './args.js';

const schemaClassInstance = new schemaClass;
test('splitInputStr() transforms the String input into an array', () => {
    expect(schemaClassInstance.splitInputStr('-l -p 8080 -d /usr/logs')).toEqual(['-l', '-p', '8080', '-d', '/usr/logs']);
});

test('isFlag() returns true if is a flag or false if is a negative number.', () => {
    expect(schemaClassInstance.isFlag('-p')).toBe(true);
    expect(schemaClassInstance.isFlag('-2')).toBe(false);
});

test('validFlag() check if the flag exists in our schema', () => {
    expect(schemaClassInstance.validFlag('p')).toBe(true);
    expect(schemaClassInstance.validFlag('8')).toBe('Invalid! The Flag does not exist.');
    expect(schemaClassInstance.validFlag('z')).toBe('Invalid! The Flag does not exist.');
});

test('defaultValue() returns the default value of a flag', () => {
    expect(schemaClassInstance.defaultValue('l')).toBe(false);
    expect(schemaClassInstance.defaultValue('p')).toBe(0);
    expect(schemaClassInstance.defaultValue('d')).toBe('');
});

test('flagIndex() returns the index of the flag in our schema', () => {
    expect(schemaClassInstance.flagIndex('l')).toBe(0);
    expect(schemaClassInstance.flagIndex('p')).toBe(1);
    expect(schemaClassInstance.flagIndex('d')).toBe(2);
});

test('setNewFlag() returns a message if the flag was successfully added to the schema or it was missing a parameter', () => {
    expect(schemaClassInstance.setNewFlag('r', 'rubiana', String, 'student')).toBe('New Flag "r" added to the Schema');
    expect(schemaClassInstance.setNewFlag('r', String, 'student')).toBe('Missing parameters.');
});

test('checkInput() returns true if all the inputs in the object is complete, or false if one of then if undefined', () => {
    expect(schemaClassInstance.checkInput({ flag: 'r', name: 'rubiana', type: String, defaultValue: 'student' })).toBe(true);
    expect(schemaClassInstance.checkInput({ flag: 'r', name: 'rubiana', type: String, defaultValue: undefined })).toBe(false);
});

test('displaySchema() returns the current schema', () => {
    let displaiedSchema = [{
        flag: 'l',
        name: 'logging',
        type: Boolean,
        defaultValue: false
    },
    {
        flag: 'p',
        name: 'port',
        type: Number,
        defaultValue: 0,
    },
    {
        flag: 'd',
        name: 'directory',
        type: String,
        defaultValue: ''
    },
    {
        flag: 'r',
        name: 'rubiana',
        type: String,
        defaultValue: 'student',
    }
    ];
    let displaiedChangedSchema = [{
        flag: 'l',
        name: 'logging',
        type: Boolean,
        defaultValue: false
    },
    {
        flag: 'p',
        name: 'port',
        type: Number,
        defaultValue: 0,
    },
    {
        flag: 'd',
        name: 'directory',
        type: String,
        defaultValue: '',
    },
    {
        flag: 'r',
        name: 'rubiana',
        type: String,
        defaultValue: 'student',
    },
    {
        flag: 'r',
        name: 'rubiana',
        type: String,
        defaultValue: 'student',
    }
    ];
    expect(schemaClassInstance.displaySchema()).toEqual(displaiedSchema);
    schemaClassInstance.setNewFlag('r', 'rubiana', String, 'student');
    expect(schemaClassInstance.displaySchema()).toEqual(displaiedChangedSchema);
});

const parserClassInstance = new parserClass;
test('output() supposed to bring the flags and the correspondents values or the default values when missing', () => {
    expect(parserClassInstance.output('-l -p 8080 -d /usr/logs')).toBe('Flag: -l Value: false Flag: -p Value: 8080 Flag: -d Value: /usr/logs ');
    expect(parserClassInstance.output('-l -p -d /usr/logs')).toBe('Flag: -l Value: false Flag: -p Value: 0 Flag: -d Value: /usr/logs ');
    expect(parserClassInstance.output('-l -z -p 8080 -d /usr/logs')).toBe('Flag: -l Value: false -z is not a valid flag Flag: -p Value: 8080 Flag: -d Value: /usr/logs ');
});