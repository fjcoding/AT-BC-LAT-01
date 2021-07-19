import { Schema } from './schema';

describe('Class schema methods', () => {
    test ('Method giveSchema() should be able to give the schema to validate the input', () => {
        const schemaInstance = new Schema();
        expect(schemaInstance.giveSchema()).toEqual([
            { flag: 'l', flagName: 'logging', defaultValue: false, valueType: 'boolean' },
            { flag: 'p', flagName: 'port', defaultValue: 0, valueType: 'number' },
            { flag: 'd', flagName: 'directory', defaultValue: '', valueType: 'string' },
        ]);
    });
    test('Method getFlagAndValueType', () => {
        const schemaInstance = new Schema();
        expect(schemaInstance.getFlagAndValueType([
            { flag: 'l', flagName: 'logging', defaultValue: false, valueType: 'boolean' },
            { flag: 'p', flagName: 'port', defaultValue: 0, valueType: 'number' },
            { flag: 'd', flagName: 'directory', defaultValue: '', valueType: 'string' },
        ])).toEqual(['l boolean', 'p number', 'd string']);
        expect(schemaInstance.getFlagAndValueType([
            { flag: 'p', value: '6023', valueType: 'number' },
            { flag: 'd', Value: '/katas', valueType: 'string' }
        ])).toEqual(['p number', 'd string']);
    });
});