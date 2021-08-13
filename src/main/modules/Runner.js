import { Execution } from './Execution';
import { Output } from './Output';
import { Scenario } from './Scenario';

export class Runner {
    follow(actorsArray, actionsArray, scenes) {
        const mainScenario = new Scenario();
        const actors = mainScenario.createActor(actorsArray);
        const actions = mainScenario.createActions(actionsArray);
        const executer = new Execution(actions, actors, scenes);
        const states = executer.execute(actions, actors, scenes);
        const response = new Output();
        const result = response.generateResults(states);
        return result;
    }
}
