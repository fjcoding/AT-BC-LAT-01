export class InteractiveActions {
    constructor(actionActor, actionType, target) {
        this.actionActor = actionActor;
        this.actionType = actionType;
        this.target = target;
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

    getTarget() {
        return this.target;
    }

    setTarget(target) {
        this.target = target;
    }

}