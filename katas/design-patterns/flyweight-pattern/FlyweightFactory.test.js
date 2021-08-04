import { FlyweightFactory } from './FlyweightFactory';
import { Flyweight } from './Flyweight'

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

    test('returns a created flyweight', () => {
        expect(flyweightFactory.get('iPhone', '12', 'mini')).toEqual(
            {brand: 'iPhone', model: '12', type: 'mini'}
            );
    });

    test('returns all created flyweight', () => {
        flyweightFactory.get('iPhone', '12', 'mini');
        flyweightFactory.get('iPhone', '12', '');
        flyweightFactory.get('iPhone', '12', 'Pro');
        flyweightFactory.get('iPhone', '12', 'ProMax');

        expect(flyweightFactory.getAll()).toEqual([
            {brand: 'iPhone', model: '12', type: 'mini'},
            {brand: 'iPhone', model: '12', type: ''},
            {brand: 'iPhone', model: '12', type: 'Pro'},
            {brand: 'iPhone', model: '12', type: 'ProMax'},
        ]);
    });
});