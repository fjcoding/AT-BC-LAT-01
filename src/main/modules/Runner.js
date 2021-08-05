import { Execution } from './Execution';
import { Output } from './Output';
import { Scenario } from './Scenario';

export class Runner {
    constructor(parserActorsArray, parserActionsArray) {
        this.actors = parserActorsArray;
        this.actions = parserActionsArray;
    }

    run() {
        const mainScenario = new Scenario();
        const actors = mainScenario.createActor(this.actors);
        const actions = mainScenario.createActions(this.actions);
        const executer = new Execution(actions, actors);
        const states = executer.execute(actions, actors);
        const response = new Output();
        const result = response.generateResults(states);
        return result;
    }
}
