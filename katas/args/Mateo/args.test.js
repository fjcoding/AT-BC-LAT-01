import { Schema } from "./args";

test('Class Schema should be able to give the schema to validate the input', () => {
    const classInstance = new Schema;
    expect(classInstance.giveSchema()).toEqual({
        l: { value: true, valueType: 'boolean' },
        p: { value: 0, valueType: 'number' },
        d: { value: '', valueType: 'string' },
    });
})