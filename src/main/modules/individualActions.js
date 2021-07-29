export class individualActions {
    constructor(actionActor, actionType, element){
        this.actionActor = actionActor;
        this.actionType = actionType;
        this.element = element;
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