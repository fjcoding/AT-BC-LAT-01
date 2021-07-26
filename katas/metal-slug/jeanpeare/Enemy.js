import {Character} from './Character.js';

export class Enemy extends Character{
    constructor(CharacterType, Health, Armor, Abilitie){
        super(CharacterType, Health);
        this.Armor = Armor;
        this.Abilitie = Abilitie;
    }
}

export function getEnemyHealth(){
    return Enemy.Health;
}