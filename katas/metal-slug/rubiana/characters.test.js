//import { Character } from './characters.js';
import { Soldier } from './characters.js';
//import { Enemie } from './characters.js';
//import { Civilian } from './characters.js';

const soldierInstance = new Soldier;
test('displayCharacters() returns the Character Schema', () => {
    let charactersDisplaied = [{
        character: 'Soldier1',
        hole: 'soldier',
        habilities: 'habilities',
        health: 30,
        vehicle: 'camel',
    },
    {
        character: 'Enime1',
        hole: 'enime',
        habilities: 'habilities',
        health: 30,
        vehicle: null,
    },
    ];
    expect(soldierInstance.displayCharacters()).toEqual(charactersDisplaied);
});