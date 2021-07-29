import { Actors } from './actor.js';
import { individualActions } from './individualActions.js';
import { interactiveActions } from './InteractiveActions.js';

var parserActorsArray = [];
var parserActionsArray = [];
export class Scenario {
    constructor (id){
        this.id = id;
    }

    createActor(actorObjects) {
        for (var index = 0; index < (Object.keys(actorObjects).length);) {
            parserActorsArray[index] = new Actors(actorObjects[index].name, actorObjects[index].type, actorObjects[index].weapon);
            index++;
        }
        return parserActorsArray;
    }


    createActions(actionObjects) {
        for (var index = 0; index < (Object.keys(actionObjects).length);) {
            if (actionObjects.length == 3){
                parserActionsArray[index] = new interactiveActions(actionObjects[index].actor, actionObjects[index].action, actionObjects[index].from);
            } else {
                parserActionsArray[index] = new individualActions(actionObjects[index].actor, actionObjects[index].action);
            }
            index++;
        }
        return parserActionsArray;
    }

    executeScenario(){

    }
}