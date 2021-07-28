import  { Actor } from './Actor.js';

describe('class constructor should recibe data to build a Actors', () => {
    test('the object is not empty', () => {
        const actor = new Actor('Marco', 1, 'PF Squad Soldier', 'Handgun');

        expect(actor.actorName).not.toBeUndefined();
        expect(actor.healthPoints).not.toBeUndefined();
        expect(actor.actorType).not.toBeUndefined();
        expect(actor.weaponType).not.toBeUndefined();
    });
    test('the object has the correct values', () => {
        const actor = new Actor('RAS1', 1, 'Rebel Army soldier', 'tank cannon');

        expect(actor.actorName).toBe('RAS1');
        expect(actor.healthPoints).toBe(1);
        expect(actor.actorType).toBe('Rebel Army soldier');
        expect(actor.weaponType).toBe('tank cannon');
    });
    test('is Alive Method', () => {
        const actor1 = new Actor('Marco', 1, 'PF Squad Soldier', 'Handgun');
        const actor2 = new Actor('RAS1', 0, 'Rebel Army soldie', 'tank cannon');

        expect(actor1.isAlive(actor1.healthPoints)).toBe('Alive');
        expect(actor2.isAlive(actor2.healthPoints)).toBe('Death');
    });

});