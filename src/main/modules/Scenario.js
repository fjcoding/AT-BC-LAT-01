import { Actor } from './Actor.js';
import { IndividualActions } from './IndividualActions.js';
import { InteractiveActions } from './InteractiveActions.js';

var parserActorsArray = [];
var parserActionsArray = [];

export class Scenario {
    constructor(scenes){
        this.scenes = scenes;
    }

    setScenes (scenes){
        this.scenes = scenes;
        return this.scenes;
    }

    createActor(actorObjects) {
        for (var index = 0; index < (actorObjects.length);) {
            parserActorsArray[index] = new Actor(
                actorObjects[index].name,
                actorObjects[index].type,
                actorObjects[index].weapon,
                actorObjects[index].health,
                actorObjects[index].position);
            index++;
        }
        return parserActorsArray;
    }

    createActions(actionObjects) {
        for (var index = 0; index < (Object.keys(actionObjects).length);) {
            if (actionObjects[index].target !== undefined) {
                parserActionsArray[index] = new InteractiveActions(
                    actionObjects[index].actor,
                    actionObjects[index].action,
                    actionObjects[index].target,
                    actionObjects[index].scenes);
            }
            if (actionObjects[index].element !== undefined) {
                parserActionsArray[index] = new IndividualActions(
                    actionObjects[index].actor,
                    actionObjects[index].action,
                    actionObjects[index].element);
            }
            index++;
        }
        return parserActionsArray;
    }
}