import { expect } from '@jest/globals';
import { ArgsShema } from './argsShema';

describe('Constructor of the args class', () => {
    it('should crate an instace of the class', () => {
        const argsObj = new ArgsShema('-l', true,'-p', 8080, '-d' , '/usr/logs');
        expect(argsObj._logFlag).toBe('-l');
        expect(argsObj._logValue).toBe(true);
        expect(argsObj._portFlag).toBe('-p');
        expect(argsObj._portValue).toBe(8080);
        expect(argsObj._pathFlag).toBe('-d');
        expect(argsObj._pathValue).toBe('/usr/logs');
    });
});

describe('default method of the constructor argss Class', () => {
    it('should send the default message if the constructor is empty', () => {
        const argsObj = new ArgsShema();
        expect(argsObj.defaultMessage()).toEqual('log Data 0 ');
    });
        
});


