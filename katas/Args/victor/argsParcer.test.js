import { logValidation, portValadation, directoryValidation, argsbuild }  from './argsParcer';
import { ArgsShema } from './argsShema';


describe('check if the functions are being is called', () => {
    test('Verify if "log" status changes to true', () => {
        expect(logValidation()).toBe(true);
    });
    test('check if portValadation convert validates an integer', () => {
        expect(typeof portValadation()).toBe('number');
    });
    test('check if directoryValidation convert validates and integer', () => {
        expect(typeof directoryValidation()).toBe('string');
    });
    test('check if argsbuild makes an instense of argsShema class', () => {
        expect(argsbuild()).toBeInstanceOf(ArgsShema);
    });
   
});

