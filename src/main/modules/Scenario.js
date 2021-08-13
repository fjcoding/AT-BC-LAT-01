import { Actor } from './Actor.js';
import { IndividualActions } from './IndividualActions.js';
import { InteractiveActions } from './InteractiveActions.js';

var actorsArray = [];
var actionsArray = [];

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
            actorsArray[index] = new Actor(
                actorObjects[index].name,
                actorObjects[index].type,
                actorObjects[index].weapon,
                actorObjects[index].health,
                actorObjects[index].position);
            index++;
        }
        return actorsArray;
    }

    createActions(actionObjects) {
        for (var index = 0; index < (Object.keys(actionObjects).length);) {
            if (actionObjects[index].target !== undefined) {
                actionsArray[index] = new InteractiveActions(
                    actionObjects[index].actor,
                    actionObjects[index].action,
                    actionObjects[index].target,
                    actionObjects[index].scenes);
            }
            if (actionObjects[index].element !== undefined) {
                actionsArray[index] = new IndividualActions(
                    actionObjects[index].actor,
                    actionObjects[index].action,
                    actionObjects[index].element);
            }
            index++;
        }
        return actionsArray;
    }
}