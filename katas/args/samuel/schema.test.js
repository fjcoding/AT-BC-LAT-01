import { Schema } from './schema';

test ('Class Schema should be able to give the schema to validate the input', () => {
    const classInstance = new Schema();
    expect(classInstance.giveSchema()).toEqual([
        { flag: 'l', flagName: 'logging', defaultValue: false, valueType: 'boolean' },
        { flag: 'p', flagName: 'port', defaultValue: 0, valueType: 'number' },
        { flag: 'd', flagName: 'directory', defaultValue: '', valueType: 'string' },
        { flag: 'h', flagName: 'help', defaultValue: false, valueType:  'boolean' }
    ]);
});