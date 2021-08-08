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
        switch (this.type) {
        case 'weapon':
            var result = true;
            result = AttributesVerifier.check(obj, ['actor', 'name', 'power', 'xScope', 'yScope']);
            if (result == true) result = AttributesVerifier.check(this.scenario, 'actors');
            if (result == true) result = ActorVerifier.check(this.scenario, obj.actor);

            return result;

        case 'action':
            result = AttributesVerifier.check(obj, ['actor', 'action']);
            if (result == true) result = ActionVerifier.check(obj);
            if (result == true) result = ActorVerifier.check(this.scenario, obj.actor);

            return result;

        default:
            throw new Error('Type of verifier does not exist');
        }
    }
}