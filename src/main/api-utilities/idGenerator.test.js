import { idGenerator } from './idGenerator';

describe('Verify that idGenerator function', () => {
    test('generates a random string with 6 characters', () => {
        const id = idGenerator(6);
        expect(typeof(id)).toBe('string');
        expect(id.length).toBe(6);
    });

    test('generates a random string with 4 characters', () => {
        const id = idGenerator(4);
        expect(typeof(id)).toBe('string');
        expect(id.length).toBe(4);
    });
});