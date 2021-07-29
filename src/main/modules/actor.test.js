import  { Actors } from './actor.js';

describe('class constructor should recibe data to build a Actors', () => {
    test('the object is not empty', () => {
        const actor = new Actors('Marco', 1, 'PF Squad Soldier', 'Handgun');

        expect(actor.name).not.toBeUndefined();
        expect(actor.health).not.toBeUndefined();
        expect(actor.type).not.toBeUndefined();
        expect(actor.weapon).not.toBeUndefined();
    });
    test('the object has the correct values', () => {
        const actor = new Actors('RAS1', 'Rebel Army soldier', 'tank cannon', 1);

        expect(actor.name).toBe('RAS1');
        expect(actor.health).toBe(1);
        expect(actor.type).toBe('Rebel Army soldier');
        expect(actor.weapon).toBe('tank cannon');
    });
    test('is Alive Method', () => {
        const actor1 = new Actors('Marco', 'PF Squad Soldier', 'Handgun', 1);
        const actor2 = new Actors('RAS1', 'Rebel Army soldie', 'tank cannon', 0);

        expect(actor1.isAlive(actor1.health)).toBe('Alive');
        expect(actor2.isAlive(actor2.health)).toBe('Death');
    });

});