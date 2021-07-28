import { IdGenerator } from './IdGenerator';

describe('Verify that IdGenerator class', () => {
    test('generates a random string with 6 characters', () => {
        const idGenerator = new IdGenerator(6);
        const id = idGenerator.generateId();
        expect(typeof(id)).toBe('string');
        expect(id.length).toBe(6);
    });

    test('generates a random string with 4 characters', () => {
        const idGenerator = new IdGenerator(4);
        const id = idGenerator.generateId();
        expect(typeof(id)).toBe('string');
        expect(id.length).toBe(4);
    });
});