import {Enemy} from './Enemy.js';

test('Enemiess should be created with the correct data type and atributes complete', () => {
    expect(new Enemy('Boss',10,10,'Heal')).toEqual({'CharacterType': 'Boss', 'Health': 10, 'Armor' : 10, 'Abilitie' : 'Heal'});
});

