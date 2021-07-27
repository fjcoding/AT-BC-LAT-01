import { expect } from '@jest/globals';
import { Fight } from './Fight';

test('Fight should be created with a left fighter and a right figther', () => {
    const fight = new Fight();
    expect(fight.leftFighter).not.toBeUndefined();
    expect(fight.rightFighter).not.toBeUndefined();
});

test('Right fighter should be defeated after left fighter attacks three times', () => {
    const fight = new Fight();
    fight.makeLeftFighterAttack();
    fight.makeLeftFighterAttack();
    fight.makeLeftFighterAttack();
    const isRightFigtherDefeated = fight.rightFighter.isDefeated();
    expect(isRightFigtherDefeated).toBe(true);
});

test('Right fighter should not be defeated after left fighter attacks two times', () => {
    const fight = new Fight();
    fight.makeRightFighterAttack();
    fight.makeRightFighterAttack();
    const isRightFigtherDefeated = fight.rightFighter.isDefeated();
    expect(isRightFigtherDefeated).toBe(false);
});