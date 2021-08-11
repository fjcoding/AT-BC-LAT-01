export class ScenarioHandler {
    constructor (scenario = {}) {
        this.scenario = scenario;
    }

    pushAttribute(newObj, attribute = '') {
        if (Array.isArray(this.scenario[attribute]) == true) {
            this.scenario[attribute].push(newObj);
        } else {
            this.scenario[attribute] = [newObj];
        }
    }

    replaceWeapon(weapon, actorName) {
        this.scenario.actors.forEach(actor => {
            if (actor.name == actorName) actor.weapon = weapon;
        });
    }

    replaceAttribute(newObj, attribute) {
        if(!attribute) throw new Error('No attribute specified');
        this.scenario[attribute] = newObj;
    }
}