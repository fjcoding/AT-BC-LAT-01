import { Weapon, Handgun } from "./Weapon.js";

describe('Handgun expected to reduce 1 pointOfHealt of a single enemy', () => {
    const handgun = new Handgun();
    const enemies = [
        {pointsOfHealth: 5},
        {pointsOfHealth: 2},
        {pointsOfHealth: 10}
    ];

    test('when attacks a single enemy', () => {
        expect( handgun.attack(enemies[0]) ).toStrictEqual( { pointsOfHealth: 4 } );
        expect( handgun.attack(enemies[1]) ).toStrictEqual( { pointsOfHealth: 1 } );
        expect( handgun.attack(enemies[2]) ).toStrictEqual( { pointsOfHealth: 9 } );
    });

    test('when attacks multiple enemies', () => {
        expect( handgun.attack(enemies) ).toEqual([
                {pointsOfHealth: 3},
                {pointsOfHealth: 1},
                {pointsOfHealth: 9}
        ]);
        expect( handgun.attack(enemies) ).toEqual([
                {pointsOfHealth: 2},
                {pointsOfHealth: 1},
                {pointsOfHealth: 9}
        ]);
    });
});