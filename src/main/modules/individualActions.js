export class individualActions {
    constructor(actionActor, actionType){
        this.actionActor = actionActor;
        this.actionType = actionType;
    }

    setactionActor(actionActor){
        this.actionActor = actionActor;
    }

    getactionActor (){
        return this.actionActor;
    }

    setactionType (actionType){
        this.actionType = actionType;
    }

    getactionType (){
        return this.actionType;
    }

}