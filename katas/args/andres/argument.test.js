import { Argument } from './argument.js';

test('testing the Argument constructor works correctly', () => {
    //WORK IN PROGRESS!!
    //expect(storeArgValues('p',8080)).toBe();
    const obj = new Argument('p', 8080);
    expect(obj.flag).toBe('p');
    expect(obj.argValue).toBe(8080);
    
});