import {
    ScenarioAttributeVerifier,
    ActionAttributeVerifier,
    ActorAttributeVerifier,
    ScenesAttributeVerifier,
    WeaponAttributeVerifier
} from './ScenarioAttributeVerifier';

export class VerifierInterface {
    constructor(scenario, type) {
        if (scenario && type) {
            this.scenario = scenario;
            this.type = type;

            this.scenarioVerifier = new ScenarioAttributeVerifier;
            this.actorVerifier = new ActorAttributeVerifier;
            this.actionVerifier = new ActionAttributeVerifier;
            this.scenesVerifier = new ScenesAttributeVerifier;
            this.weaponVerifier = new WeaponAttributeVerifier;

        } else {
            throw new Error('Scenario and Type must be defined');
        }
    }

    check(obj) {
        var result = true;
        switch (this.type) {
        case 'weapon':
            return this.weaponVerifier.check(this.scenario, obj);

        case 'action':
            return this.actionVerifier.check(this.scenario, obj);

        case 'actor':
            result = this.actorVerifier.check(obj);
            if (result == true) {
                if (typeof obj.weapon === 'object') {
                    obj.weapon.actor = obj.name;
                    result = this.weaponVerifier.check({actors: [obj]}, obj.weapon);
                } else {
                    result = 'weapon is not an object';
                }
            }
            return result;

        case 'scenario':
            result = this.scenarioVerifier.check(this.scenario);
            if (result == true) result = this.scenesVerifier.check(this.scenario.scenes);

            if (result == true) {
                this.scenario.actors.forEach(actor => {
                    if (result == true) {
                        result = this.actorVerifier.check(actor);
                        if (result == true) {
                            if (typeof actor.weapon === 'object') {
                                actor.weapon.actor = actor.name;
                                result = this.weaponVerifier.check(this.scenario, actor.weapon);
                            } else {
                                result = 'weapon is not an object';
                            }
                        }
                    }
                });
            }

            if (result == true) {
                this.scenario.actions.forEach(action => {
                    if (result == true) result = this.actionVerifier.check(this.scenario, action);
                });
            }

            return result;

        default:
            throw new Error('Type of verifier does not exist');
        }
    }
}