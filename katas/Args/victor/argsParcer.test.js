import { logValidation } from "./argsParcer";

jest.spyOn().mockImplementation(()=>{})

describe('check if the logValidation method is called', () => {
    it('method gets the array', () => {
        const argStrings = '-l -p 8080 -d /usr/logs';
        const argsSplit = argStrings.split(' ');
        logValidation(argsSplit);
        expect(logValidation).toBeCalledWith(argsSplit);
    });
    
    
});
