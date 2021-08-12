import {
    AttributesVerifier,
    ActorVerifier,
    ActionVerifier
} from './../../main/api-utilities/PropertyVerifier';

export class VerifierInterface {
    constructor(scenario, type) {
        if (scenario && type) {
            this.scenario = scenario;
            this.type = type;
        } else {
            throw new Error('Scenario and Type must be defined');
        }
    }

    check(obj) {
        var result = true;
        switch (this.type) {
        case 'weapon':
            result = AttributesVerifier.check(obj, ['actor', 'name', 'power', 'xScope', 'yScope']);
            if (result == true) result = AttributesVerifier.check(this.scenario, 'actors');
            if (result == true) result = ActorVerifier.check(this.scenario, obj.actor);

            return result;

        case 'action':
            result = AttributesVerifier.check(obj, ['actor', 'action']);
            if (result == true) result = ActionVerifier.check(obj);
            if (result == true) result = ActorVerifier.check(this.scenario, obj.actor);

            return result;

        case 'actor':
            return AttributesVerifier.check(obj, ['health', 'name', 'weapon', 'type', 'position']);

        case 'scenario':
            result = AttributesVerifier.check(this.scenario, ['actors', 'actions', 'scenes']);

            if (result == true) {
                this.scenario.actors.forEach(actor => {
                    if (result == true) {
                        result = AttributesVerifier.check(actor, ['health', 'name', 'weapon', 'type', 'position']);
                        if (result == true) result = AttributesVerifier.check(actor.weapon, ['power', 'xScope', 'yScope']);
                    }
                });
            }

            if (result == true) {
                this.scenario.actions.forEach(action => {
                    if (result == true) {
                        result = AttributesVerifier.check(action, ['actor', 'action']);
                        if (result == true) result = ActionVerifier.check(action);
                        if (result == true) result = ActorVerifier.check(this.scenario, action.actor);
                    }
                });
            }
            return result;

        default:
            throw new Error('Type of verifier does not exist');
        }
    }
}