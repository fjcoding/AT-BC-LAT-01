import {Alien, Boss, Soldier, Enemy, createEnemies} from './Enemy.js';

test('Enemiess should be created with the correct data type and atributes complete', () => {
    expect(new Enemy('Boss', 10, 10, 'Heal')).toEqual({'CharacterType': 'Boss', 'Health': 10, 'Attack' : 10, 'Abilitie' : 'Heal'});
    expect(new Enemy('Alien', 2, 2, 'Invisible')).toEqual({'CharacterType': 'Alien', 'Health': 2, 'Attack' : 2, 'Abilitie' : 'Invisible'});
    expect(new Enemy('Soldier', 1, 0, 'Dont Have')).toEqual({'CharacterType': 'Soldier', 'Health': 1, 'Attack' : 0, 'Abilitie' : 'Dont Have'});
    expect(new Enemy('Mercenarie', 1, 2, 'Dont Have')).toEqual({'CharacterType': 'Mercenarie', 'Health': 1, 'Attack' : 2, 'Abilitie' : 'Dont Have'});
});

test('Enemies array need to be created related on number of enemies, obtaining Health, Attack and Abilitie', () => {
    expect(createEnemies([Boss, Alien, Soldier, Soldier])).toEqual([[ 10, 10, 'Heal'], [ 2, 2, 'Invisible'], [ 1, 1, 'Dont Have'], [ 1, 1, 'Dont Have']]);
});


