import { AttributesVerifier } from './SinglePropertyVerifier';

export class TemplateVerifier {
    constructor (
        scenario,
        propertyVerifier,
        template = {
            actors: {name: undefined, type: undefined, weapon: undefined},
            actions: {actor: undefined, action: undefined}}
    ) {

        this.scenario = scenario;
        this.template = template;
        this.attributeVerifier = propertyVerifier;
    }

    check() {
        let verifierResult = this.verifyActorAndActions();
        if (verifierResult == true) verifierResult = this.verifyActors();
        if (verifierResult == true) verifierResult = this.verifyActions();
        if (verifierResult == true) verifierResult = this.verifyActionsProperties();

        return verifierResult;
    }

    verifyActorAndActions () {
        this.attributeVerifier = new AttributesVerifier(this.scenario, Object.keys(this.template));
        return this.attributeVerifier.check();
    }

    verifyActors () {
        if (Array.isArray(this.scenario.actors)) {
            let result = true;

            for (let index = 0; index < this.scenario.actors.length; index++) {
                const actor = this.scenario.actors[index];
                this.attributeVerifier = new AttributesVerifier(actor, Object.keys(this.template.actors));
                result = this.attributeVerifier.check();
                if (result != true) break;
            }

            return result;
        }

        this.attributeVerifier = new AttributesVerifier(this.scenario.actors, Object.keys(this.template.actors), 'actors');
        return this.attributeVerifier.check();
    }

    verifyActions () {
        if (Array.isArray(this.scenario.actions)) {
            let result = true;

            for (let index = 0; index < this.scenario.actions.length; index++) {
                const action = this.scenario.actions[index];
                this.attributeVerifier = new AttributesVerifier(action, Object.keys(this.template.actions), 'actions');
                result = this.attributeVerifier.check();
                if (result != true) break;
            }

            return result;
        }
        this.attributeVerifier = new AttributesVerifier(this.scenario.actions, Object.keys(this.template.actions));
        return this.attributeVerifier.check();
    }

    verifyActionsProperties() {
        if (Array.isArray(this.scenario.actions)) {
            let result = true;

            for (let index = 0; index < this.scenario.actions.length; index++) {
                const action = this.scenario.actions[index];
                this.attributeVerifier = new AttributesVerifier(action, 'element', 'actions');
                result = this.attributeVerifier.check();

                if (result != true) {
                    this.attributeVerifier = new AttributesVerifier(action, 'from', 'actions');
                    result = this.attributeVerifier.check();
                }

                if (result != true) break;
            }

            return result;
        }
        this.attributeVerifier = new AttributesVerifier(this.scenario.actions, Object.keys(this.template.actions));
        return this.attributeVerifier.check();
    }

}