import { FightStats } from './FightStats';
import { Fight } from './Fight';
import { Ryu } from './Ryu.js';
import { Guile } from './Guile.js';

test('Fight stats should log 200 points when left fighter attacks 2 times', () => {
    const fightStats =  new FightStats();
    const ryu = new Ryu();
    const guile = new Guile();
    const fight = new Fight(ryu, guile);
    fight.makeLeftFighterAttack();
    fight.makeLeftFighterAttack();
    expect(fightStats.getScore()).toBe(200);
});