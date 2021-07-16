import { Schema } from "./args";

test ('Class Schema should be able to give the schema to validate the input', () => {
    const classInstance = new Schema;
    expect(classInstance.giveSchema()).toEqual({
        l: { defaultValue: false, valueType: 'boolean' },
        p: { defaultValue: 0, valueType: 'number' },
        d: { defaultValue: '', valueType: 'string' },
        h: { defaultValue: false, valueType: 'boolean' }
    });
})