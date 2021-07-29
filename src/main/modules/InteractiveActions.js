export class InteractiveActions {
    constructor(actionActor, actionType, fromActor) {
        this.actionActor = actionActor;
        this.actionType = actionType;
        this.fromActor = fromActor;
    }

    getactionActor() {
        return this.actionActor;
    }

    setactionActor(actionActor) {
        this.actionActor = actionActor;
    }

    getactionType() {
        return this.actionType;
    }

    setactionType(actionType) {
        this.actionType = actionType;
    }

    getfromActor() {
        return this.fromActor;
    }

    setfromActor(fromActor) {
        this.fromActor = fromActor;
    }

}