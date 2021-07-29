import { individualActions } from './individualActions.js';

export class interactiveActions extends individualActions {
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
