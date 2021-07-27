import {Character} from './Character.js';

export class Enemy extends Character{
    constructor(CharacterType, Health, Attack, Abilitie){
        super(CharacterType, Health);
        this.Attack = Attack;
        this.Abilitie = Abilitie;
    }

    getEnemyDetails(){
        return [this.Health, this.Attack, this.Abilitie];
    }

}

export const Boss = new Enemy(
    'Boss',
    10,
    10,
    'Heal');
export const Alien = new Enemy(
    'Alien',
    2,
    2,
    'Invisible');
export const Soldier = new Enemy(
    'Soldier',
    1,
    1,
    'Dont Have');
export const Mercenarie = new Enemy(
    'Mercenarie',
    2,
    1,
    'Dont Have');
export var enemiesStats = [];
export var enemiesArray = [Boss, Alien, Mercenarie, Soldier];
export function createEnemies(enemiesArray){
    enemiesArray.forEach(function (value, index) {
        enemiesStats[index] = (value.getEnemyDetails());
    });
    return enemiesStats;
}
createEnemies(enemiesArray);