import { Validation } from './Validation';

var actualActor = 0;
var validationExectute = new Validation;
export class Execution {
    constructor(parserActionsArray, parserActorsArray, scenes) {
        this.parserActionsArray = parserActionsArray;
        this.parserActorsArray = parserActorsArray;
        this.scenes = scenes;
    }

    execute(parserActionsArray, parserActorsArray, scenes) {
        let bulletPos = [];
        let bulletRange = [];
        for (let actualScene = 0; actualScene < scenes; actualScene++){
            for (var actualAction = 0; actualAction < (parserActionsArray.length); actualAction++) { // Through the actions lenght
                switch (parserActionsArray[actualAction].actionType) {
                case 'Shoot Weapon':
                    switch (parserActionsArray[actualAction].target) {
                    case 'east':
                        if (parserActionsArray[actualAction].scenes > 0){
                            for (actualActor = 0; actualActor < parserActorsArray.length; actualActor++) { // Throug all actors
                                if (parserActorsArray[actualActor].name == parserActionsArray[actualAction].actionActor) { // Validate actor executor
                                    validationExectute.East(
                                        parserActorsArray,
                                        parserActionsArray,
                                        actualAction,
                                        actualScene,
                                        bulletPos,
                                        bulletRange,
                                        actualActor);
                                }
                            }
                            bulletPos[actualAction]++;
                            parserActionsArray[actualAction].scenes--;
                        }
                        break;
                    case 'west':
                        if (parserActionsArray[actualAction].scenes > 0){
                            for (actualActor = 0; actualActor < parserActorsArray.length; actualActor++) { // Throug all actors
                                if (parserActorsArray[actualActor].name == parserActionsArray[actualAction].actionActor) { // Validate actor executor
                                    validationExectute.West(
                                        parserActorsArray,
                                        parserActionsArray,
                                        actualAction,
                                        actualScene,
                                        bulletPos,
                                        bulletRange,
                                        actualActor);
                                }
                            }
                            bulletPos[actualAction]--;
                            parserActionsArray[actualAction].scenes--;
                        }
                        break;
                    case 'north':
                        if (parserActionsArray[actualAction].scenes > 0){
                            for (actualActor = 0; actualActor < parserActorsArray.length; actualActor++) { // Throug all actors
                                if (parserActorsArray[actualActor].name == parserActionsArray[actualAction].actionActor) { // Validate actor executor
                                    validationExectute.North(
                                        parserActorsArray,
                                        parserActionsArray,
                                        actualAction,
                                        actualScene,
                                        bulletPos,
                                        bulletRange,
                                        actualActor);
                                }
                            }
                            bulletPos[actualAction]++;
                            parserActionsArray[actualAction].scenes--;
                        }
                        break;
                    case 'south':
                        if (parserActionsArray[actualAction].scenes > 0){
                            for (actualActor = 0; actualActor < parserActorsArray.length; actualActor++) { // Throug all actors
                                if (parserActorsArray[actualActor].name == parserActionsArray[actualAction].actionActor) { // Validate actor executor
                                    validationExectute.South(
                                        parserActorsArray,
                                        parserActionsArray,
                                        actualAction,
                                        actualScene,
                                        bulletPos,
                                        bulletRange,
                                        actualActor);
                                }
                            }
                            bulletPos[actualAction]--;
                            parserActionsArray[actualAction].scenes--;
                        }

                        break;
                    }
                    break;
                default:
                    break;
                }
            }
        }
        return parserActorsArray;
    }
}
