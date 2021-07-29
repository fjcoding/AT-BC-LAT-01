import  { Actors } from './actor.js';

describe('class constructor should recibe data to build a Actors', () => {
    test('the object is not empty', () => {
        const actor = new Actors('Marco', 1, 'PF Squad Soldier', 'Handgun');

        expect(actor._actorName).not.toBeUndefined();
        expect(actor._healthPoints).not.toBeUndefined();
        expect(actor._actorType).not.toBeUndefined();
        expect(actor._weaponType).not.toBeUndefined();
    });
    test('the object has the correct values', () => {
        const actor = new Actors('RAS1', 1, 'Rebel Army soldier', 'tank cannon');

        expect(actor._actorName).toBe('RAS1');
        expect(actor._healthPoints).toBe(1);
        expect(actor._actorType).toBe('Rebel Army soldier');
        expect(actor._weaponType).toBe('tank cannon');
    });
    test('is Alive Method', () => {
        const actor1 = new Actors('Marco', 1, 'PF Squad Soldier', 'Handgun');
        const actor2 = new Actors('RAS1', 0, 'Rebel Army soldie', 'tank cannon');

        expect(actor1.isAlive(actor1._healthPoints)).toBe('Alive');
        expect(actor2.isAlive(actor2._healthPoints)).toBe('Death');
    });

});