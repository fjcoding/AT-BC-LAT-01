import { IdGenerator } from './IdGenerator';

describe('Verify that IdGenerator class', () => {
    const idLength = 6;
    const idGenerator = new IdGenerator(idLength);
    test('generates a random string with 6 characters', () => {
        const id = idGenerator.generateId();
        expect(typeof(id)).toBe('string');
        expect(id.length).toBe(idLength);
    });
});