import { FightStats } from './FightStats';
import { Fight } from './Fight';
import { Ryu } from './Ryu.js';
import { Guile } from './Guile.js';

test('Fight stats should log 100 points when log score is invoked', () => {
    const fightStats =  new FightStats();
    fightStats.logScore();
    expect(fightStats.getScore()).toBe(100);
});

test('Fight stats should log 200 points when left fighter attacks 2 times', () => {
    const fightStats =  new FightStats();
    const ryu = new Ryu();
    const guile = new Guile();
    const fight = new Fight(ryu, guile);
    fight.makeLeftFighterAttack(fightStats);
    fight.makeLeftFighterAttack(fightStats);
    expect(fightStats.getScore()).toBe(200);
});