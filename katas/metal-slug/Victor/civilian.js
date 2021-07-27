import { Character } from './character.js';

export class Civilian extends Character{
    constructor(tied = true, healthPoints = 1){
        super(healthPoints);
        this._tied = Boolean(tied);
    }

}