import { FlyweightFactory } from './FlyweightFactory';

describe('Verify that FlyweightFactory', () => {
    const flyweightFactory = new FlyweightFactory();
    test('has Flyweight property', () => {
        expect(flyweightFactory.flyweight).not.toBe(undefined);
    });

    test('creates a new flyweight', () => {
        expect(flyweightFactory.flyweight).toEqual({});

        flyweightFactory.get('iPhone', '12', 'mini');
        expect(flyweightFactory.flyweight).toEqual({
            iPhone12mini: {brand: 'iPhone', model: '12', type: 'mini'}
        });
    });

    test('returns the tag of a created flyweight', () => {
        expect(flyweightFactory.get('iPhone', '12', 'mini')).toBe('iPhone12mini');
    });

    test('returns all created flyweight', () => {
        flyweightFactory.get('iPhone', '12', 'mini');
        flyweightFactory.get('iPhone', '12', '');
        flyweightFactory.get('iPhone', '12', 'Pro');

        expect(flyweightFactory.getAll()).toEqual({
            iPhone12mini: {brand: 'iPhone', model: '12', type: 'mini'},
            iPhone12: {brand: 'iPhone', model: '12', type: ''},
            iPhone12Pro: {brand: 'iPhone', model: '12', type: 'Pro'}
        });
    });
});