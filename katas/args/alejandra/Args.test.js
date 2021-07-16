import { Args } from './Args';

describe('Test if given a flag can be added to the args list', () => {
    const argsInstance = new Args();
    argsInstance.addArg('p', 5500);
    test('Test if given a flag and a value can be added to the argsList', () => {
        expect(argsInstance.getArgsList()).toEqual([
            { flag: 'p', value: 5500 },
        ]);
    });
    const argsInstance1 = new Args();
    argsInstance1.addArg('l');
    test('Test if given a flag and a value can be added and the value its undefined', () => {
        expect(argsInstance1.getArgsList()).toEqual([
            { flag: 'l', value: undefined },
        ]);
    });
});
