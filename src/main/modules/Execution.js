var index2 = 0;
var indexAct = 0;
export class Execution {
    constructor(parserActionsArray, parserActorsArray, scenes) {
        this.parserActionsArray = parserActionsArray;
        this.parserActorsArray = parserActorsArray;
        this.scenes = scenes;
    }

    execute(parserActionsArray, parserActorsArray, scenes) {
        let bulletPos = [];
        let bulletRange = [];
        for (let indexGeneralScenes = 0; indexGeneralScenes < scenes; indexGeneralScenes++){
            for (var index = 0; index < (parserActionsArray.length); index++) { // Through the actions lenght
                switch (parserActionsArray[index].actionType) {
                case 'Shoot Weapon':
                    switch (parserActionsArray[index].target) {
                    case 'east':
                        if (parserActionsArray[index].scenes > 0){
                            for (index2 = 0; index2 < parserActorsArray.length; index2++) { // Throug all actors
                                if (parserActorsArray[index2].name == parserActionsArray[index].actionActor) { // Validate actor executor
                                    if (indexGeneralScenes == 0){ //first iteration bullet pos need to be iniatilized in actor pos
                                        bulletPos[index] = parserActorsArray[index2].position.xPos; // indexation related to Actor executor position
                                        bulletRange[index] = parserActorsArray[index2].weapon.xScope + parserActorsArray[index2].position.xPos;// indexation related to Weapon Scope
                                    }
                                    if (bulletPos[index] <= bulletRange[index]) { // Throug positions involved
                                        for (indexAct = 0; indexAct < parserActorsArray.length; indexAct++) { // verifiy Actors positions in positions involved
                                            if (parserActorsArray[indexAct].position.xPos == bulletPos[index] &&
                                                parserActorsArray[indexAct].name !== parserActionsArray[index].actionActor) { // Validation of deal damage
                                                parserActorsArray[indexAct].health -= parserActorsArray[index2].weapon.power;
                                            }
                                        }
                                    }
                                }
                            }
                            bulletPos[index]++;
                            parserActionsArray[index].scenes--;
                        }
                        break;
                    case 'west':
                        if (parserActionsArray[index].scenes > 0){
                            for (index2 = 0; index2 < parserActorsArray.length; index2++) { // Throug all actors
                                if (parserActorsArray[index2].name == parserActionsArray[index].actionActor) { // Validate actor executor
                                    if (indexGeneralScenes == 0){ //first iteration bullet pos need to be iniatilized in actor pos
                                        bulletPos[index] = parserActorsArray[index2].position.xPos; // indexation related to Actor executor position
                                        bulletRange[index] =  parserActorsArray[index2].position.xPos - parserActorsArray[index2].weapon.xScope;// indexation related to Weapon Scope
                                    }
                                    if (bulletPos[index] >= bulletRange[index]) { // Throug positions involved
                                        for (indexAct = 0; indexAct < parserActorsArray.length; indexAct++) { // verifiy Actors positions in positions involved
                                            if (parserActorsArray[indexAct].position.xPos == bulletPos[index] &&
                                                parserActorsArray[indexAct].name !== parserActionsArray[index].actionActor) { // Validation of deal damage
                                                parserActorsArray[indexAct].health -= parserActorsArray[index2].weapon.power;
                                            }
                                        }
                                    }
                                }
                            }
                            bulletPos[index]--;
                            parserActionsArray[index].scenes--;
                        }

                        break;
                    case 'north':
                        if (parserActionsArray[index].scenes > 0){
                            for (index2 = 0; index2 < parserActorsArray.length; index2++) { // Throug all actors
                                if (parserActorsArray[index2].name == parserActionsArray[index].actionActor) { // Validate actor executor
                                    if (indexGeneralScenes == 0){ //first iteration bullet pos need to be iniatilized in actor pos
                                        bulletPos[index] = parserActorsArray[index2].position.yPos; // indexation related to Actor executor position
                                        bulletRange[index] = parserActorsArray[index2].weapon.yScope + parserActorsArray[index2].position.yPos;// indexation related to Weapon Scope
                                    }
                                    if (bulletPos[index] <= bulletRange[index]) { // Throug positions involved
                                        for (indexAct = 0; indexAct < parserActorsArray.length; indexAct++) { // verifiy Actors positions in positions involved
                                            if (parserActorsArray[indexAct].position.yPos == bulletPos[index] &&
                                                parserActorsArray[indexAct].name !== parserActionsArray[index].actionActor) { // Validation of deal damage
                                                parserActorsArray[indexAct].health -= parserActorsArray[index2].weapon.power;
                                            }
                                        }
                                    }
                                }
                            }
                            bulletPos[index]++;
                            parserActionsArray[index].scenes--;
                        }
                        break;
                    case 'south':
                        if (parserActionsArray[index].scenes > 0){
                            for (index2 = 0; index2 < parserActorsArray.length; index2++) { // Throug all actors
                                if (parserActorsArray[index2].name == parserActionsArray[index].actionActor) { // Validate actor executor
                                    if (indexGeneralScenes == 0){ //first iteration bullet pos need to be iniatilized in actor pos
                                        bulletPos[index] = parserActorsArray[index2].position.yPos; // indexation related to Actor executor position
                                        bulletRange[index] =  parserActorsArray[index2].position.yPos - parserActorsArray[index2].weapon.yScope;// indexation related to Weapon Scope
                                    }
                                    if (bulletPos[index] >= bulletRange[index]) { // Throug positions involved
                                        for (indexAct = 0; indexAct < parserActorsArray.length; indexAct++) { // verifiy Actors positions in positions involved
                                            if (parserActorsArray[indexAct].position.yPos == bulletPos[index] &&
                                                parserActorsArray[indexAct].name !== parserActionsArray[index].actionActor) { // Validation of deal damage
                                                parserActorsArray[indexAct].health -= parserActorsArray[index2].weapon.power;
                                            }
                                        }
                                    }
                                }
                            }
                            bulletPos[index]--;
                            parserActionsArray[index].scenes--;
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
