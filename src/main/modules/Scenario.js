import { Actors } from './actor.js';

export class Scenario {
    constructor (id){
        this.id = id;
    }
    createActor(actorObjects) {
            console.log(Object.keys(actorObjects) + "AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
            actorObjects.forEach(function (, index) {
            actorObjects[index].name = new Actors(actorObjects[index].name, actorObjects[index].type, actorObjects[index].weapon);
            console.log(index + actorObjects[index] + "LLALALALALAALLALALA");
            return actorObjects[index].name;
        });
        
    }

    createActions(actionObjects) {
        actionObjects.forEach(function (value, index) {
            actionObjects[index].name = new Actors(actionObjects[index].name, actorObjects[index].type, actorObjects[index].weapon);
        });

    }
}