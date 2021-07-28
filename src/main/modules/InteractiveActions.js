import { IndividualActions } from './individualActions.js';

export class InteractiveActions extends IndividualActions {
    constructor(actionActor, actionType, fromActor){
        super(actionActor, actionType);
        this.fromActor = fromActor;
    }

    getfromActor(){
        return this.fromActor;
    }

    setfromActor(fromActor){
        this.fromActor = fromActor;
    }

}