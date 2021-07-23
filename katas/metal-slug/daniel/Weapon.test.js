import { SingleEnemyWeapon, MultipleEnemiesWeapon } from './Weapon.js';

describe('SingleEnemyWeapon expected to reduce 1 pointOfHealt of a single enemy', () => {
    const handgun = new SingleEnemyWeapon();
    const enemies = [
        {pointsOfHealth: 5},
        {pointsOfHealth: 2},
        {pointsOfHealth: 10}
    ];

    test('but the enemies are not in an array', () => {
        expect( () => { handgun.shoot(enemies[0]); } ).toThrow(Error);
    });

    test('when attacks a single enemy', () => {
        expect( handgun.shoot( [enemies[0]] )).toStrictEqual([ {pointsOfHealth: 4}]);
        expect( handgun.shoot( [enemies[1]] )).toStrictEqual([ {pointsOfHealth: 1}]);
        expect( handgun.shoot( [enemies[2]] )).toStrictEqual([ {pointsOfHealth: 9}]);
    });

    test('when attacks multiple enemies', () => {
        expect( handgun.shoot(enemies) ).toEqual([
            {pointsOfHealth: 3},
            {pointsOfHealth: 1},
            {pointsOfHealth: 9}
        ]);
        expect( handgun.shoot(enemies) ).toEqual([
            {pointsOfHealth: 2},
            {pointsOfHealth: 1},
            {pointsOfHealth: 9}
        ]);
    });

    test('when attacks an enemy with 0 pointsOfHealth', () => {
        expect( handgun.shoot([ {pointsOfHealth: 0} ]) ).toEqual([ {pointsOfHealth: 0} ]);
    });
});


describe('MultipleEnemiesWeapon expected to reduce 1 pointOfHealt of multiple enemies', () => {
    const handgun = new MultipleEnemiesWeapon();
    const enemies = [
        {pointsOfHealth: 5},
        {pointsOfHealth: 2},
        {pointsOfHealth: 10}
    ];

    test('but the enemies are not in an array', () => {
        expect( () => { handgun.shoot(enemies[0]); } ).toThrow(Error);
    });

    test('when attacks a single enemy', () => {
        expect( handgun.shoot( [enemies[0]] )).toStrictEqual([ {pointsOfHealth: 4}]);
        expect( handgun.shoot( [enemies[1]] )).toStrictEqual([ {pointsOfHealth: 1}]);
        expect( handgun.shoot( [enemies[2]] )).toStrictEqual([ {pointsOfHealth: 9}]);
    });

    test('when attacks multiple enemies', () => {
        expect( handgun.shoot(enemies) ).toEqual([
            {pointsOfHealth: 3},
            {pointsOfHealth: 0},
            {pointsOfHealth: 8}
        ]);
        expect( handgun.shoot(enemies) ).toEqual([
            {pointsOfHealth: 2},
            {pointsOfHealth: 0},
            {pointsOfHealth: 7}
        ]);
    });

    test('when attacks an enemy with 0 pointsOfHealth', () => {
        expect( handgun.shoot([ {pointsOfHealth: 0} ]) ).toEqual([ {pointsOfHealth: 0} ]);
    });
});