import { Validation } from './Validation.js';

var actualActor = 0;
var validationExectute = new Validation;
export class Execution {
    constructor(actionsArray, actorsArray, scenes) {
        this. actionsArray =  actionsArray;
        this. actorsArray =  actorsArray;
        this.scenes = scenes;
    }

    execute(actionsArray, actorsArray, scenes) {
        let bulletPos = [];
        for (let actualScene = 0; actualScene < scenes; actualScene++){
            for (var actualAction = 0; actualAction < (actionsArray.length); actualAction++) { // Through the actions lenght
                switch (actionsArray[actualAction].actionType) {
                case 'Shoot Weapon':
                    switch (actionsArray[actualAction].target) {
                    case 'east':
                        if (actionsArray[actualAction].scenes > 0){
                            for (actualActor = 0; actualActor <  actorsArray.length; actualActor++) { // Throug all actors
                                if (actorsArray[actualActor].name ==  actionsArray[actualAction].actionActor) { // Validate actor executor
                                    validationExectute.East(
                                        actorsArray,
                                        actionsArray,
                                        actualAction,
                                        actualScene,
                                        bulletPos,
                                        actualActor);
                                }
                            }
                        }
                        break;
                    case 'west':
                        if (actionsArray[actualAction].scenes > 0){
                            for (actualActor = 0; actualActor <  actorsArray.length; actualActor++) { // Throug all actors
                                if (actorsArray[actualActor].name ==  actionsArray[actualAction].actionActor) { // Validate actor executor
                                    validationExectute.West(
                                        actorsArray,
                                        actionsArray,
                                        actualAction,
                                        actualScene,
                                        bulletPos,
                                        actualActor);
                                }
                            }

                        }
                        break;
                    case 'north':
                        if (actionsArray[actualAction].scenes > 0){
                            for (actualActor = 0; actualActor <  actorsArray.length; actualActor++) { // Throug all actors
                                if (actorsArray[actualActor].name ==  actionsArray[actualAction].actionActor) { // Validate actor executor
                                    validationExectute.North(
                                        actorsArray,
                                        actionsArray,
                                        actualAction,
                                        actualScene,
                                        bulletPos,
                                        actualActor);
                                }
                            }


                        }
                        break;
                    case 'south':
                        if (actionsArray[actualAction].scenes > 0){
                            for (actualActor = 0; actualActor <  actorsArray.length; actualActor++) { // Throug all actors
                                if (actorsArray[actualActor].name ==  actionsArray[actualAction].actionActor) { // Validate actor executor
                                    validationExectute.South(
                                        actorsArray,
                                        actionsArray,
                                        actualAction,
                                        actualScene,
                                        bulletPos,
                                        actualActor);
                                }
                            }


                        }

                        break;
                    }
                    break;
                default:
                    break;
                }
            }
        }
        return  actorsArray;
    }
}
