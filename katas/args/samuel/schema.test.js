import { Schema } from './schema';

describe('Class schema methods', () => {
    test ('Method giveSchema() should be able to give the schema to validate the input', () => {
        const classInstance = new Schema();
        expect(classInstance.giveSchema()).toEqual([
            { flag: 'l', flagName: 'logging', defaultValue: false, valueType: 'boolean' },
            { flag: 'p', flagName: 'port', defaultValue: 0, valueType: 'number' },
            { flag: 'd', flagName: 'directory', defaultValue: '', valueType: 'string' },
            { flag: 'h', flagName: 'help', defaultValue: false, valueType:  'boolean' }
        ]);
    });
    test('Method getFlagAndValueType', () => {
        const classInstance = new Schema();
        expect(classInstance.getFlagAndValueType([
            { flag: 'l', flagName: 'logging', defaultValue: false, valueType: 'boolean' },
            { flag: 'p', flagName: 'port', defaultValue: 0, valueType: 'number' },
            { flag: 'd', flagName: 'directory', defaultValue: '', valueType: 'string' },
            { flag: 'h', flagName: 'help', defaultValue: false, valueType:  'boolean' }
        ])).toEqual(['l boolean', 'p number', 'd string', 'h boolean']);
        expect(classInstance.getFlagAndValueType([
            { flag: 'p', value: '6023', valueType: 'number' },
            { flag: 'd', Value: '/katas', valueType: 'string' }
        ])).toEqual(['p number', 'd string']);
    });
});
