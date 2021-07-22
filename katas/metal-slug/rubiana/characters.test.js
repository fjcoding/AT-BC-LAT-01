import { Character } from './characters.js';
import { Soldier } from './characters.js';
import { Enemie } from './characters.js';
import { Civilian } from './characters.js';

const soldierInstance = new Soldier;
test('createNewSoldier() creates a new Soldier character', () => {
    let charactersDisplaied = [{
            character: 'Soldier1',
            hole: 'soldier',
            habilities: 'habilities',
            healt: 30,
            vehicle: 'camel',
        },
        {
            character: 'Enime1',
            hole: 'enime',
            habilities: 'habilities',
            healt: 30,
            vehicle: null,
        },
    ];
    expect(soldierInstance.displayCharacters()).toEqual(charactersDisplaied);
});

test('createNewSoldier() creates a new Soldier character', () => {
    let charactersDisplaied2 = [{
            character: 'Soldier2',
            hole: 'soldier',
            habilities: 'habilities',
            healt: 30,
            vehicle: null,
        }, {
            character: 'Soldier1',
            hole: 'soldier',
            habilities: 'habilities',
            healt: 30,
            vehicle: 'camel',
        },
        {
            character: 'Enime1',
            hole: 'enime',
            habilities: 'habilities',
            healt: 30,
            vehicle: null,
        },
    ];
    soldierInstance.createNewSoldier('Soldier2', 'soldier', 'habilities', 30, null);
    expect(soldierInstance.displayCharacters()).toEqual(charactersDisplaied2);
});
/*
const enemieInstance = new Enemie;
test('createNewEnemie() creates a new Enemie character', () => {
    expect().toEqual();
});

const civilianInstance = new Civilian;
test('createNewCivilian() creates a new Civilian character', () => {
    expect().toEqual();
});
*/