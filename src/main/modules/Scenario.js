import { Actors } from './actor.js';

export class Scenario {
    constructor(id) {
        this.id = id;
    }

    createActor(actorObjects) {
        actorObjects.forEach(function (value, index) {
            actorObjects[index].name = new Actors(actorObjects[index].name, actorObjects[index].type, actorObjects[index].weapon);
            return actorObjects[index].name;
        });

    }

    createActions(actionObjects) {
        actionObjects.forEach(function (value, index) {
            actionObjects[index].name = new Actors(actionObjects[index].name, actionObjects[index].type, actionObjects[index].weapon);
        });

    }
}