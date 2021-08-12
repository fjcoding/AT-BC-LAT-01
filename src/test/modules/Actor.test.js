import  { Actor } from '../../main/modules/Actor.js';

describe('class constructor should recibe data to build a Actors', () => {

    test('The instance attributes need to be returned as they are defined', () => {
        const actor = new Actor('RAS1', 'Rebel Army soldier', 'tank cannon', 1, {xPos: 0, yPos: 1});
        expect(actor.name).toBe('RAS1');
        expect(actor.health).toBe(1);
        expect(actor.type).toBe('Rebel Army soldier');
        expect(actor.weapon).toBe('tank cannon');
        expect(actor.position).toEqual({'xPos': 0, 'yPos': 1});
        expect(actor.position.xPos).toEqual(0);
        expect(actor.position.yPos).toEqual(1);
    });

    test('Methods getValue and setValue need to set and get the value expected in the correct attribute', () => {
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