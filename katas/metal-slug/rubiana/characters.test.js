import { Soldier } from './characters.js';
import { CharactersSchema } from './characters.js';

const schema = new CharactersSchema;
test('displayCharacters() returns the Character Schema', () => {
    let charactersDisplayed = {
        characters: [{
            character: 'Soldier1',
            hole: 'soldier',
            habilities: 'habilities',
            health: 30,
            vehicle: 'camel',
        },
        {
            character: 'Enemy1',
            hole: 'enime',
            habilities: 'habilities',
            health: 30,
            vehicle: null,
        },
        ]
    };

    expect(schema.displayCharacters()).toEqual(charactersDisplayed);
});

test('showCurrentSchema() should return the current Schema of characters with the new soldier just created', () => {
    let changedSchema = {
        characters: [{
            character: 'Soldier1',
            hole: 'soldier',
            habilities: 'habilities',
            health: 30,
            vehicle: 'camel',
        },
        {
            character: 'Enemy1',
            hole: 'enime',
            habilities: 'habilities',
            health: 30,
            vehicle: null,
        },
        {
            character: 'Soldado',
            hole: 'soldier',
            habilities: ['shootWeapon', 'useKnife', 'throwGranades'],
            health: 30,
            vehicle: null,
        },
        ]
    };
    let soldier = new Soldier('Soldado', null);
    expect(soldier.showCurrentSchema()).toEqual(changedSchema);
});