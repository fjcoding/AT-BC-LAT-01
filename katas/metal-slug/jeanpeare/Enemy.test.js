import {Enemy} from './Enemy.js';

test('Enemiess should be created with the correct data type and atributes complete', () => {
    expect(new Enemy('Boss', 10, 10, 'Heal')).toEqual({'CharacterType': 'Boss', 'Health': 10, 'Armor' : 10, 'Abilitie' : 'Heal'});
    expect(new Enemy('Alien', 2, 2, 'Invisible')).toEqual({'CharacterType': 'Alien', 'Health': 2, 'Armor' : 2, 'Abilitie' : 'Invisible'});
    expect(new Enemy('Soldier', 1, 0, 'Dont Have')).toEqual({'CharacterType': 'Soldier', 'Health': 1, 'Armor' : 0, 'Abilitie' : 'Dont Have'});
    expect(new Enemy('Mercenarie', 1, 2, 'Dont Have')).toEqual({'CharacterType': 'Mercenarie', 'Health': 1, 'Armor' : 2, 'Abilitie' : 'Dont Have'});
});

