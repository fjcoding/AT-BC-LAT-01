import { logValidation, portValadation, directoryValidation, argsbuild }  from './argsParcer';


describe('check if the functions are being is called', () => {
    test('function should be called', () => {
        const argStrings = '-l -p 8080 -d /usr/logs';
        const argsSplit = argStrings.split(' ');

        expect(logValidation()).toBe(true);
    });
    
    
}); 
