var index2 = 0;
export class Execution {
    constructor(parserActionsArray, parserActorsArray) {
        this.parserActionsArray = parserActionsArray;
        this.parserActorsArray = parserActorsArray;
    }

    execute(parserActionsArray, parserActorsArray) {
        for (var index = 0; index < (parserActionsArray.length); index++) {
            switch(parserActionsArray[index].actionType) {
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
                break;
            case 'Receive Attack':
                for (index2 = 0; index2 < parserActorsArray.length; index2++) {
                    if (parserActorsArray[index2].name == parserActionsArray[index].actionActor) {
                        parserActorsArray[index2].health --;
                    }
                }
                break;
            default:
            }
        }
        return parserActionsArray, parserActorsArray;
    }

}
