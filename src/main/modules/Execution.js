var index2 = 0;
export class Execution {
    constructor(parserActionsArray, parserActorsArray){
        this.parserActionsArray = parserActionsArray;
        this.parserActorsArray = parserActorsArray;
    }

    execute(parserActionsArray, parserActorsArray){
        for (var index = 0; index < (parserActionsArray.length); index++) {
            console.log('ACA VAMOS EN LA ITERACION NUMERO '+index + parserActionsArray[index].actionType);
            switch(parserActionsArray[index].actionType){
            case 'Pick Weapon':
                for (index2 = 0; index2 < parserActorsArray.length; index2++){
                    if (parserActorsArray[index2].name == parserActionsArray[index].actionActor){
                        parserActorsArray[index2].weapon = parserActionsArray[index].element;
                        console.log('NUEVO ARMA ADQUIRIDA '+ parserActorsArray[index].weapon);
                    }

                }
                break;
            case 'Heal':
                console.log('ENTRA ESTO! '+ parserActorsArray[0].health+parserActorsArray[1].health+parserActorsArray[2].health);
                for (index2 = 0; index2 < parserActorsArray.length; index2++){
                    console.log('BRUTALMENTE ITERACION '+ index2 + parserActorsArray[index2].name + ' and '+ parserActionsArray[index].actionActor);
                    if (parserActorsArray[index2].name == parserActionsArray[index].actionActor){
                        console.log('VIDAAAAA ' +parserActorsArray[index2].health);
                        parserActorsArray[index2].health += parserActionsArray[index].element;
                        console.log('NUEVO PUNTO DE SALUD ADQUIRIDO '+ parserActorsArray[index2].name + ' now ' + parserActorsArray[index2].health);

                    }

                }
                break;
            case 'Shoot Weapon':
                break;
            case 'Receive Attack':
                for (index2 = 0; index2 < parserActorsArray.length; index2++){
                    console.log('BRUTALMENTE ITERACION '+ index2 + parserActorsArray[index2].name + ' and '+ parserActionsArray[index].actionActor);
                    if (parserActorsArray[index2].name == parserActionsArray[index].actionActor){
                        console.log('VDANAGEEEEEEEEEE to ' +parserActionsArray[index].actionActor);
                        parserActorsArray[index2].health --;
                        console.log('NUEVA VIDA de '+ parserActionsArray[index].actionActor + ' now ' + parserActorsArray[index2].health);

                    }

                }
                break;
            default:
                console.log('default');
                console.log('EL VALOR DEL CASO ES ' + parserActionsArray[index].actionType + parserActorsArray[index].weapon + parserActorsArray[index].health);
            }
        }
        return parserActionsArray, parserActorsArray;
    }

}
