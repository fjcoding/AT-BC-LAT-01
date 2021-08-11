export class InteractiveActions {
    constructor(actionActor, actionType, target, scenes) {
        this.actionActor = actionActor;
        this.actionType = actionType;
        this.target = target;
        this.scenes = scenes;
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