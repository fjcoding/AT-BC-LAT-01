import { Weapon, Handgun } from "./Weapon.js";

describe('Handgun expected to reduce 1 pointOfHealt of a single enemy', () => {
    const handgun = new Handgun();
    const enemies = [
        {pointsOfHealth: 5},
        {pointsOfHealth: 2},
        {pointsOfHealth: 10}
    ];

    test('when attack a single enemy', () => {
        expect( handgun.attack(enemies[0]) ).toStrictEqual( { pointsOfHealth: 4 } );
    });
});