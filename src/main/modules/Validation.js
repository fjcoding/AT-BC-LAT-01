export class Validation {

    East(parserActorsArray, parserActionsArray, actualAction, actualScene, bulletPos, bulletRange, actualActor){
        if (actualScene == 0){ //first iteration bullet pos need to be iniatilized in actor pos
            bulletPos[actualAction] = parserActorsArray[actualActor].position.xPos; // actualActionation related to Actor executor position
            bulletRange[actualAction] = parserActorsArray[actualActor].weapon.xScope + parserActorsArray[actualActor].position.xPos;// actualActionation related to Weapon Scope
        }
        if (bulletPos[actualAction] <= bulletRange[actualAction]) { // Throug positions involved
            for (let actorAffected = 0; actorAffected < parserActorsArray.length; actorAffected++) { // verifiy Actors positions in positions involved
                if (parserActorsArray[actorAffected].position.xPos == bulletPos[actualAction] &&
                    parserActorsArray[actorAffected].name !== parserActionsArray[actualAction].actionActor) { // Validation of deal damage
                    parserActorsArray[actorAffected].health -= parserActorsArray[actualActor].weapon.power;
                }
            }
        }
        return (parserActorsArray, parserActionsArray, actualAction, actualScene, bulletPos, bulletRange, actualActor);
    }

    West(parserActorsArray, parserActionsArray, actualAction, actualScene, bulletPos, bulletRange, actualActor){
        if (actualScene == 0){ //first iteration bullet pos need to be iniatilized in actor pos
            bulletPos[actualAction] = parserActorsArray[actualActor].position.xPos; // actualActionation related to Actor executor position
            bulletRange[actualAction] =  parserActorsArray[actualActor].position.xPos - parserActorsArray[actualActor].weapon.xScope;// actualActionation related to Weapon Scope
        }
        if (bulletPos[actualAction] >= bulletRange[actualAction]) { // Throug positions involved
            for (let actorAffected = 0; actorAffected < parserActorsArray.length; actorAffected++) { // verifiy Actors positions in positions involved
                if (parserActorsArray[actorAffected].position.xPos == bulletPos[actualAction] &&
                    parserActorsArray[actorAffected].name !== parserActionsArray[actualAction].actionActor) { // Validation of deal damage
                    parserActorsArray[actorAffected].health -= parserActorsArray[actualActor].weapon.power;
                }
            }
        }
        return (parserActorsArray, parserActionsArray, actualAction, actualScene, bulletPos, bulletRange, actualActor);
    }

    North(parserActorsArray, parserActionsArray, actualAction, actualScene, bulletPos, bulletRange, actualActor){
        if (actualScene == 0){ //first iteration bullet pos need to be iniatilized in actor pos
            bulletPos[actualAction] = parserActorsArray[actualActor].position.yPos; // actualActionation related to Actor executor position
            bulletRange[actualAction] = parserActorsArray[actualActor].weapon.yScope + parserActorsArray[actualActor].position.yPos;// actualActionation related to Weapon Scope
        }
        if (bulletPos[actualAction] <= bulletRange[actualAction]) { // Throug positions involved
            for (let actorAffected = 0; actorAffected < parserActorsArray.length; actorAffected++) { // verifiy Actors positions in positions involved
                if (parserActorsArray[actorAffected].position.yPos == bulletPos[actualAction] &&
                    parserActorsArray[actorAffected].name !== parserActionsArray[actualAction].actionActor) { // Validation of deal damage
                    parserActorsArray[actorAffected].health -= parserActorsArray[actualActor].weapon.power;
                }
            }
        }
        return (parserActorsArray, parserActionsArray, actualAction, actualScene, bulletPos, bulletRange, actualActor);
    }

    South(parserActorsArray, parserActionsArray, actualAction, actualScene, bulletPos, bulletRange, actualActor){
        if (actualScene == 0){ //first iteration bullet pos need to be iniatilized in actor pos
            bulletPos[actualAction] = parserActorsArray[actualActor].position.yPos; // actualActionation related to Actor executor position
            bulletRange[actualAction] =  parserActorsArray[actualActor].position.yPos - parserActorsArray[actualActor].weapon.yScope;// actualActionation related to Weapon Scope
        }
        if (bulletPos[actualAction] >= bulletRange[actualAction]) { // Throug positions involved
            for (let actorAffected = 0; actorAffected < parserActorsArray.length; actorAffected++) { // verifiy Actors positions in positions involved
                if (parserActorsArray[actorAffected].position.yPos == bulletPos[actualAction] &&
                    parserActorsArray[actorAffected].name !== parserActionsArray[actualAction].actionActor) { // Validation of deal damage
                    parserActorsArray[actorAffected].health -= parserActorsArray[actualActor].weapon.power;
                }
            }
        }
        return (parserActorsArray, parserActionsArray, actualAction, actualScene, bulletPos, bulletRange, actualActor);
    }
}