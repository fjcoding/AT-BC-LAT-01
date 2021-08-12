import {
    AttributesVerifier,
    ValueVerifier,
    ActorVerifier,
    ActionVerifier
} from './../../main/api-utilities/PropertyVerifier';

export class ScenarioAttributeVerifier {
    constructor(
        attributeVerifier = AttributesVerifier,
        valueVerifier = ValueVerifier,
        actorVerifier = ActorVerifier,
        actionVerifier = ActionVerifier
    ) {
        this.attributeVerifier = attributeVerifier;
        this.valueVerifier = valueVerifier;
        this.actorVerifier = actorVerifier;
        this.actionVerifier = actionVerifier;
    }

    check() {}
}

export class ActorAttributeVerifier extends ScenarioAttributeVerifier {

    check(actor) {
        var result = this.attributeVerifier.check(actor, ['health', 'name', 'weapon', 'type', 'position']);
        if (result == true) result = this.valueVerifier.check(actor.position.xPos, 0, 100);
        if (result == true) result = this.valueVerifier.check(actor.position.yPos, 0, 100);
        return result;
    }
}

export class ActionAttributeVerifier extends ScenarioAttributeVerifier {

    check(scenario, action) {
        var result = this.attributeVerifier.check(action, ['actor', 'action', 'scenes']);
        if (result == true) result = this.actionVerifier.check(action);
        if (result == true) result = this.actorVerifier.check(scenario, action.actor);

        return result;
    }
}
