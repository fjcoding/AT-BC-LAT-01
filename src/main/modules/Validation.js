export class Validation {

    East(actorsArray, actionsArray, actualAction, actualScene, bulletPos, actualActor){

        if (actualScene == 0){ //first iteration bullet pos need to be iniatilized in actor position
            bulletPos[actualAction] = actorsArray[actualActor].position.xPos;
            bulletPos[actualAction]++;
            return; //jump to next scene
        }
        if (actorsArray[actualActor].weapon.xScope > 1) {
            for (let advance = 0; advance < actorsArray[actualActor].weapon.xScope; advance++){
                for (let actorAffected = 0; actorAffected < actorsArray.length; actorAffected++) { // verifiy Actors positions in positions involved
                    if (actorsArray[actorAffected].position.xPos == bulletPos[actualAction] &&
                        actorsArray[actorAffected].name !== actionsArray[actualAction].actionActor) { // Validation of deal damage
                        actorsArray[actorAffected].health -= actorsArray[actualActor].weapon.power;
                    }
                }
                bulletPos[actualAction]++;
            }
        } else {

            for (let actorAffected = 0; actorAffected < actorsArray.length; actorAffected++) { // verifiy Actors positions in positions involved
                if (actorsArray[actorAffected].position.xPos == bulletPos[actualAction] &&
                    actorsArray[actorAffected].name !== actionsArray[actualAction].actionActor) { // Validation of deal damage
                    actorsArray[actorAffected].health -= actorsArray[actualActor].weapon.power;
                }
            }
            bulletPos[actualAction]++;
        }
        return (actorsArray, actionsArray, actualAction, actualScene, bulletPos, actualActor);
    }

    West(actorsArray, actionsArray, actualAction, actualScene, bulletPos, actualActor){
        if (actualScene == 0){ //first iteration bullet pos need to be iniatilized in actor pos
            bulletPos[actualAction] = actorsArray[actualActor].position.xPos; // actualActionation related to Actor executor position
            bulletPos[actualAction]--;
            return; //jump to next scene
        }if (actorsArray[actualActor].weapon.xScope > 1){
            for (let advance = 0; advance < actorsArray[actualActor].weapon.xScope; advance++){
                for (let actorAffected = 0; actorAffected < actorsArray.length; actorAffected++) { // verifiy Actors positions in positions involved
                    if (actorsArray[actorAffected].position.xPos == bulletPos[actualAction] &&
                    actorsArray[actorAffected].name !== actionsArray[actualAction].actionActor) { // Validation of deal damage
                        actorsArray[actorAffected].health -= actorsArray[actualActor].weapon.power;
                    }
                }
                bulletPos[actualAction]--;
            }
        } else {
            for (let actorAffected = 0; actorAffected < actorsArray.length; actorAffected++) { // verifiy Actors positions in positions involved
                if (actorsArray[actorAffected].position.xPos == bulletPos[actualAction] &&
                actorsArray[actorAffected].name !== actionsArray[actualAction].actionActor) { // Validation of deal damage
                    actorsArray[actorAffected].health -= actorsArray[actualActor].weapon.power;
                }
            }
            bulletPos[actualAction]--;
        }
        return (actorsArray, actionsArray, actualAction, actualScene, bulletPos, actualActor);
    }

    North(actorsArray, actionsArray, actualAction, actualScene, bulletPos, actualActor){
        if (actualScene == 0){ //first iteration bullet pos need to be iniatilized in actor pos
            bulletPos[actualAction] = actorsArray[actualActor].position.yPos; // actualActionation related to Actor executor position
            bulletPos[actualAction]++;
            return; //jump to next scene
        }
        if (actorsArray[actualActor].weapon.yScope > 1){
            for (let advance = 0; advance < actorsArray[actualActor].weapon.yScope; advance++){
                for (let actorAffected = 0; actorAffected < actorsArray.length; actorAffected++) { // verifiy Actors positions in positions involved
                    if (actorsArray[actorAffected].position.yPos == bulletPos[actualAction] &&
                    actorsArray[actorAffected].name !== actionsArray[actualAction].actionActor) { // Validation of deal damage
                        actorsArray[actorAffected].health -= actorsArray[actualActor].weapon.power;
                    }
                }
                bulletPos[actualAction]++;
            }
        } else{
            for (let actorAffected = 0; actorAffected < actorsArray.length; actorAffected++) { // verifiy Actors positions in positions involved
                if (actorsArray[actorAffected].position.yPos == bulletPos[actualAction] &&
                    actorsArray[actorAffected].name !== actionsArray[actualAction].actionActor) { // Validation of deal damage
                    actorsArray[actorAffected].health -= actorsArray[actualActor].weapon.power;
                }
            }
            bulletPos[actualAction]++;
        }

        return (actorsArray, actionsArray, actualAction, actualScene, bulletPos, actualActor);
    }

    South(actorsArray, actionsArray, actualAction, actualScene, bulletPos, actualActor){
        if (actualScene == 0){ //first iteration bullet pos need to be iniatilized in actor pos
            bulletPos[actualAction] = actorsArray[actualActor].position.yPos; // actualActionation related to Actor executor position
            bulletPos[actualAction]--;
            return; //jump to next scene
        }
        if (actorsArray[actualActor].weapon.yScope > 1){
            for (let advance = 0; advance < actorsArray[actualActor].weapon.yScope; advance++){
                for (let actorAffected = 0; actorAffected < actorsArray.length; actorAffected++) { // verifiy Actors positions in positions involved
                    if (actorsArray[actorAffected].position.yPos == bulletPos[actualAction] &&
                    actorsArray[actorAffected].name !== actionsArray[actualAction].actionActor) { // Validation of deal damage
                        actorsArray[actorAffected].health -= actorsArray[actualActor].weapon.power;
                    }
                }
                bulletPos[actualAction]--;
            }
        } else {
            for (let actorAffected = 0; actorAffected < actorsArray.length; actorAffected++) { // verifiy Actors positions in positions involved
                if (actorsArray[actorAffected].position.yPos == bulletPos[actualAction] &&
                actorsArray[actorAffected].name !== actionsArray[actualAction].actionActor) { // Validation of deal damage
                    actorsArray[actorAffected].health -= actorsArray[actualActor].weapon.power;
                }
            }
            bulletPos[actualAction]--;
        }
        return (actorsArray, actionsArray, actualAction, actualScene, bulletPos, actualActor);
    }
}