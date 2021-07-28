import { Civilian  } from '../civilian.js';


describe('Constructor of the character class', () => {
    it('should crate an instace of the class', () => {
        let civilian = new Civilian(true, '1');
        expect(typeof civilian._healthPoints).toBe('number');
        expect(typeof civilian._tied).toBe('boolean');
    });
});