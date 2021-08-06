import { PhoneCollection } from './PhoneCollection';

describe('Verify that PhoneCollection', () => {
    const phones = new PhoneCollection();
    test('has collection property', () => {
        expect(phones.collection).not.toBe(undefined);
    });

    test('adds a new phone to the collection', () => {
        phones.add('iPhone', '12', 'mini', '64GB', 'M12GB64');
        expect(phones.collection).toEqual({
            M12GB64: {
                flyweight: 'iPhone12mini',
                memory: '64GB',
                tag: 'M12GB64'
            }});
    });

    test('returns a phone from the collection with the tag', () => {
        phones.add('iPhone', '12', 'mini', '64GB', 'M12GB64');
        expect(phones.get('M12GB64')).toEqual({
            flyweight: 'iPhone12mini',
            memory: '64GB',
            tag: 'M12GB64'
        });
    });

    test('returns all phones from the collection and all the flyweights', () => {
        phones.add('iPhone', '12', 'mini', '64GB', 'M12GB64');
        phones.add('iPhone', '12', 'mini', '128GB', 'M12GB128');
        phones.add('iPhone', '12', 'mini', '264GB', 'M12GB256');
        phones.add('iPhone', '12', '', '64GB', 'N12GB64');
        phones.add('iPhone', '12', '', '128GB', 'N12GB128');
        phones.add('iPhone', '12', '', '264GB', 'N12GB256');
        phones.add('iPhone', '12', 'Pro', '128GB', 'P12GB128');
        phones.add('iPhone', '12', 'Pro', '256GB', 'P12GB256');
        phones.add('iPhone', '12', 'Pro', '512GB', 'P12GB512');

        expect(phones.getAll()).toEqual({
            M12GB64: {flyweight: 'iPhone12mini', memory: '64GB',  tag: 'M12GB64' },
            M12GB128: {flyweight: 'iPhone12mini', memory: '128GB', tag: 'M12GB128' },
            M12GB256: {flyweight: 'iPhone12mini', memory: '264GB', tag: 'M12GB256' },
            N12GB64: {flyweight: 'iPhone12', memory: '64GB',  tag: 'N12GB64' },
            N12GB128: {flyweight: 'iPhone12', memory: '128GB', tag: 'N12GB128' },
            N12GB256: {flyweight: 'iPhone12', memory: '264GB', tag: 'N12GB256' },
            P12GB128: {flyweight: 'iPhone12Pro', memory: '128GB', tag: 'P12GB128' },
            P12GB256: {flyweight: 'iPhone12Pro', memory: '256GB', tag: 'P12GB256' },
            P12GB512: {flyweight: 'iPhone12Pro', memory: '512GB', tag: 'P12GB512' },
        });

        expect(phones.factory.getAll()).toEqual({
            iPhone12mini: {brand: 'iPhone', model: '12', type: 'mini'},
            iPhone12: {brand: 'iPhone', model: '12', type: ''},
            iPhone12Pro: {brand: 'iPhone', model: '12', type: 'Pro'}
        });
    });

});