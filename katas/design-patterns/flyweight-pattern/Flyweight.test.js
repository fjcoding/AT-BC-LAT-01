import { Flyweight } from './Flyweight';

describe('Verify that Flyweight', () => {
    test('has brand, model and type properties', () => {
        const flyweight = new Flyweight('iPhone', '12', 'mini');
        expect(flyweight.brand).not.toBe(undefined);
        expect(flyweight.model).not.toBe(undefined);
        expect(flyweight.type).not.toBe(undefined);
    });
});