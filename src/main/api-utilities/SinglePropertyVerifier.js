export class SinglePropertyVerifier {
    constructor (scenario) {
        this.scenario = scenario;
    }

    check () {}
}

export class AttributesVerifier extends SinglePropertyVerifier {
    constructor (scenario, attributes = ['actors', 'actions'], name = 'scenario') {
        super(scenario);
        this.attributes = attributes;
        this.name = name;
    }

    check () {
        let verifierResult = true;
        if (Array.isArray(this.attributes)) {
            for (let index = 0; index < this.attributes.length; index++) {
                const attribute = this.attributes[index];

                if (this.checkIfAttributeIsUndefined(attribute) != true) {
                    verifierResult = this.checkIfAttributeIsUndefined(attribute);
                    break;
                }
            }
            return verifierResult;
        }

        return  this.checkIfAttributeIsUndefined(this.attributes);
    }

    checkIfAttributeIsUndefined (attribute) {
        if (this.scenario[attribute]) {
            return true;
        }

        return 'The ' + this.name + ' does not have ' + attribute + ' attribute';
    }
}

export class ActorsOfActions extends SinglePropertyVerifier {
    constructor (scenario) {
        super(scenario);
    }

    check() {
        let result = true;
        for (let index = 0; index < this.scenario.actions.length; index++) {
            let action = this.scenario.actions[index];
            let isInActors = false;
            this.scenario.actors.forEach(actor => {
                if (action.actor == actor.name) isInActors = true;
            });

            if (isInActors == false) {
                result = action.actor + ' actor does not exist';
                break;
            }
        }

        return result;
    }
}