import  { Actor } from '../../main/modules/Actor.js';

describe('class constructor should recibe data to build a Actors', () => {
    test('the object is not empty', () => {
        const actor = new Actor('Marco', 1, 'PF Squad Soldier', 'Handgun');
        expect(actor.name).not.toBeUndefined();
        expect(actor.health).not.toBeUndefined();
        expect(actor.type).not.toBeUndefined();
        expect(actor.weapon).not.toBeUndefined();
    });

    test('the object has the correct values', () => {
        const actor = new Actor('RAS1', 'Rebel Army soldier', 'tank cannon', 1);
        expect(actor.name).toBe('RAS1');
        expect(actor.health).toBe(1);
        expect(actor.type).toBe('Rebel Army soldier');
        expect(actor.weapon).toBe('tank cannon');
    });

    test('Methods need to be done correctly', () => {
        const actor = new Actor('RAS1', 'Rebel Army soldier', 'tank cannon', 1);
        expect(actor.getActorName()).toEqual('RAS1');
        actor.setActorName('RAT1');
        expect(actor.getActorName()).toEqual('RAT1');
        expect(actor.getType()).toEqual('Rebel Army soldier');
        actor.setType('RebelArmySoldier');
        expect(actor.getType()).toEqual('RebelArmySoldier');
        expect(actor.getWeapon()).toEqual('tank cannon');
        actor.setWeapon('Shotgun');
        expect(actor.getWeapon()).toEqual('Shotgun');
        expect(actor.getHealth()).toEqual(1);
        actor.setHealth(122);
        expect(actor.getHealth()).toEqual(122);
    });

});