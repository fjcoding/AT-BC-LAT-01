export class ScenarioVerifier {
    constructor (verifiers) {
        this.verifiers = verifiers;
    }

    check () {
        if (Array.isArray(this.verifiers)) {
            let result = true;
            for (let index = 0; index < this.verifiers.length; index++) {
                let verifier = this.verifiers[index];

                result = verifier.check();
                if (result != true) break;
            }
            return result;
        }
        return this.verifiers.check();
    }
}