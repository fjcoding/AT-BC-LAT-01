import { Actors } from './actor.js';
import { individualActions } from './individualActions.js';
import { interactiveActions } from './interactiveActions.js';

var parserActorsArray = [];
var parserActionsArray = [];
export class Scenario {
    constructor (id){
        this.id = id;
    }

    createActor(actorObjects) {
        for (var index = 0; index < (actorObjects.length);) {
            parserActorsArray[index] = new Actors(actorObjects[index].name, actorObjects[index].type, actorObjects[index].weapon, 2);
            index++;
        }
        return parserActorsArray;
    }


    createActions(actionObjects) {
        for (var index = 0; index < (Object.keys(actionObjects).length);) {

            if (actionObjects[index].from !== undefined){
                parserActionsArray[index] = new interactiveActions(actionObjects[index].actor, actionObjects[index].action, actionObjects[index].from);
            } else if(actionObjects[index].element !== undefined){
                parserActionsArray[index] = new individualActions(actionObjects[index].actor, actionObjects[index].action, actionObjects[index].element);
            }
            index++;
        }
        return parserActionsArray;
    }


    executeScenario(){

    }
}