import { Execution } from './Execution';
import { Output } from './Output';
import { Scenario } from './Scenario';

export class Runner {
    follow(parserActorsArray, parserActionsArray, scenes) {
        const mainScenario = new Scenario();
        const actors = mainScenario.createActor(parserActorsArray);
        const actions = mainScenario.createActions(parserActionsArray);
        const executer = new Execution(actions, actors, scenes);
        const states = executer.execute(actions, actors, scenes);
        const response = new Output();
        const result = response.generateResults(states);
        return result;
    }
}
