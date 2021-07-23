import {Weapon} from './Weapons.js';

test('Weapons should be created with the correct data type and atributes complete', () => {
    expect(new Weapon('Heavy Machine Gun',2,1)).toEqual({'WeaponType': 'Heavy Machine Gun', 'Damage': 2, 'NumberOfTargets' : 1});
    expect(new Weapon('Rocket Launcher',4,1)).toEqual({'WeaponType': 'Rocket Launcher', 'Damage': 4, 'NumberOfTargets' : 1});
    expect(new Weapon('Shotgun',5,100)).toEqual({'WeaponType': 'Shotgun', 'Damage': 5, 'NumberOfTargets' : 100});
    expect(new Weapon('Flame Shot',5,100)).toEqual({'WeaponType': 'Flame Shot', 'Damage': 5, 'NumberOfTargets' : 100}); 
});