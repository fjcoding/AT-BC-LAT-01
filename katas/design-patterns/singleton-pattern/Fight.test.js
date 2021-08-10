import { Fight } from './Fight';
import { Ryu } from './Ryu.js';
import { Guile } from './Guile.js';

test('Fight should be created with a left fighter and a right figther', () => {
    const ryu = new Ryu();
    const guile = new Guile();
    const fight = new Fight(ryu, guile);
    expect(fight.leftFighter).not.toBeUndefined();
    expect(fight.rightFighter).not.toBeUndefined();
});

test('Right fighter should be defeated after left fighter attacks three times', () => {
    const ryu = new Ryu();
    const guile = new Guile();
    const fight = new Fight(ryu, guile);
    fight.makeLeftFighterAttack();
    fight.makeLeftFighterAttack();
    fight.makeLeftFighterAttack();
    const isRightFigtherDefeated = fight.rightFighter.isDefeated();
    expect(isRightFigtherDefeated).toBe(true);
});

test('Right fighter should not be defeated after left fighter attacks two times', () => {
    const ryu = new Ryu();
    const guile = new Guile();
    const fight = new Fight(ryu, guile);
    fight.makeRightFighterAttack();
    fight.makeRightFighterAttack();
    const isRightFigtherDefeated = fight.rightFighter.isDefeated();
    expect(isRightFigtherDefeated).toBe(false);
});