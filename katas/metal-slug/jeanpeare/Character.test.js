import { Character } from './Character.js';

test('Characters should be created with the correct data type and atributes complete', () => {
    expect(new Character('Civilian', 1)).toEqual({'CharacterType': 'Civilian', 'Health': 1});
});