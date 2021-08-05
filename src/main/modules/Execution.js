var index2 = 0;
var indexAct = 0;
export class Execution {
    constructor(parserActionsArray, parserActorsArray) {
        this.parserActionsArray = parserActionsArray;
        this.parserActorsArray = parserActorsArray;
    }

    execute(parserActionsArray, parserActorsArray) {
        for (var index = 0; index < (parserActionsArray.length); index++) {
            switch (parserActionsArray[index].actionType) {
            case 'Pick Weapon':
                for (index2 = 0; index2 < parserActorsArray.length; index2++) {
                    if (parserActorsArray[index2].name == parserActionsArray[index].actionActor) {
                        parserActorsArray[index2].weapon = parserActionsArray[index].element;
                    }
                }
                break;
            case 'Heal':
                for (index2 = 0; index2 < parserActorsArray.length; index2++) {
                    if (parserActorsArray[index2].name == parserActionsArray[index].actionActor) {
                        parserActorsArray[index2].health += parserActionsArray[index].element;
                    }
                }
                break;
            case 'Shoot Weapon':
                switch (parserActionsArray[index].target) {
                case 'east':
                    for (index2 = 0; index2 < parserActorsArray.length; index2++) { // Throug all actors
                        if (parserActorsArray[index2].name == parserActionsArray[index].actionActor) { // Validate actor executor
                            let indexPos = parserActorsArray[index2].position.xPos; // indexation related to Actor executor position
                            let indexFin = parserActorsArray[index2].weapon.xScope + parserActorsArray[index2].position.xPos;// indexation related to Weapon Scope
                            for (indexPos; indexPos <= indexFin; indexPos++) { // Throug positions involved
                                for (indexAct = 0; indexAct < parserActorsArray.length; indexAct++) { // verifiy Actors positions in positions involved
                                    if (parserActorsArray[indexAct].position.xPos == indexPos && parserActorsArray[indexAct].name !== parserActionsArray[index].actionActor) { // Validation of deal damage
                                        parserActorsArray[indexAct].health -= parserActorsArray[index].weapon.power;
                                    }
                                }
                            }
                        }
                        console.log(parserActorsArray[index2].health);
                    }
                    break;
                case 'west':
                    for (index2 = 0; index2 < parserActorsArray.length; index2++) { // Throug all actors
                        if (parserActorsArray[index2].name == parserActionsArray[index].actionActor) { // Validate actor executor
                            let indexPos = parserActorsArray[index2].position.xPos; // indexation related to Actor executor position
                            let indexFin = parserActorsArray[index2].position.xPos - parserActorsArray[index2].weapon.xScope;// indexation related to Weapon Scope
                            for (indexPos; indexPos >= indexFin; indexPos--) { // Throug positions involved
                                for (indexAct = 0; indexAct < parserActorsArray.length; indexAct++) { // verifiy Actors positions in positions involved
                                    if (parserActorsArray[indexAct].position.xPos == indexPos && parserActorsArray[indexAct].name !== parserActionsArray[index].actionActor) { // Validation of deal damage
                                        parserActorsArray[indexAct].health -= parserActorsArray[index].weapon.power;
                                    }
                                }
                            }
                        }
                        console.log(parserActorsArray[index2].health);
                    }
                    break;
                case 'north':
                    for (index2 = 0; index2 < parserActorsArray.length; index2++) { // Throug all actors
                        if (parserActorsArray[index2].name == parserActionsArray[index].actionActor) { // Validate actor executor
                            let indexPos = parserActorsArray[index2].position.yPos; // indexation related to Actor executor position
                            let indexFin = parserActorsArray[index2].weapon.yScope + parserActorsArray[index2].position.yPos;// indexation related to Weapon Scope
                            for (indexPos; indexPos <= indexFin; indexPos++) { // Throug positions involved
                                for (indexAct = 0; indexAct < parserActorsArray.length; indexAct++) { // verifiy Actors positions in positions involved
                                    if (parserActorsArray[indexAct].position.yPos == indexPos && parserActorsArray[indexAct].name !== parserActionsArray[index].actionActor) { // Validation of deal damage
                                        parserActorsArray[indexAct].health -= parserActorsArray[index].weapon.power;
                                    }
                                }
                            }
                        }
                        console.log(parserActorsArray[index2].health);
                    }
                    break;
                case 'south':
                    for (index2 = 0; index2 < parserActorsArray.length; index2++) { // Throug all actors
                        if (parserActorsArray[index2].name == parserActionsArray[index].actionActor) { // Validate actor executor
                            let indexPos = parserActorsArray[index2].position.yPos; // indexation related to Actor executor position
                            let indexFin = parserActorsArray[index2].position.yPos - parserActorsArray[index2].weapon.yScope ;// indexation related to Weapon Scope
                            for (indexPos; indexPos >= indexFin; indexPos--) { // Throug positions involved
                                for (indexAct = 0; indexAct < parserActorsArray.length; indexAct++) { // verifiy Actors positions in positions involved
                                    if (parserActorsArray[indexAct].position.yPos == indexPos && parserActorsArray[indexAct].name !== parserActionsArray[index].actionActor) { // Validation of deal damage
                                        parserActorsArray[indexAct].health -= parserActorsArray[index].weapon.power;
                                    }
                                }
                            }
                        }
                        console.log(parserActorsArray[index2].health);
                    }
                    break;
                }
                break;
            case 'Receive Attack':
                for (index2 = 0; index2 < parserActorsArray.length; index2++) {
                    if (parserActorsArray[index2].name == parserActionsArray[index].actionActor) {
                        parserActorsArray[index2].health--;
                    }
                }
                break;
            default:
            }
        }
        return parserActionsArray, parserActorsArray;
    }

}
