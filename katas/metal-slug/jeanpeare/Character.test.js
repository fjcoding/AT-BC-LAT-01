import {Character, Player, Enemy} from './Character.js';

test('Characters should be created with the correct data type and atributes complete', () => {
    expect(new Character('Civilian',1)).toEqual({'CharacterType': 'Civilian', 'Health': 1});
    expect(new Player('Player1',1,3)).toEqual({'CharacterType': 'Player1', 'Health': 1, 'Life' : 3});
    expect(new Enemy('Boss',10,10,'Heal')).toEqual({'CharacterType': 'Boss', 'Health': 10, 'Armor' : 10, 'Abilitie' : 'Heal'});
});