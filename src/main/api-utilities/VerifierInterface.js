export class VerifierInterface {
    constructor(scenario, type) {
        if (scenario && type) {
            this.scenario = scenario;
            this.type = type;
        } else {
            throw new Error('Scenario and Type must be defined');
        }
    }

    check() {
        switch (this.type) {
        case 'weapon':

            break;

        default:
            throw new Error('Type of verifier does not existe');
        }
    }
}