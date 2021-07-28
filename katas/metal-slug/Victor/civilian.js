import { Soldier } from './soldier.js';

export class Civilian {
    constructor(){
        this._healthPoints = 1;
        this._tied = true;
    }

    untied(soldier){
        if(soldier) this._tied = false;
        return this._tied;
    }
}
