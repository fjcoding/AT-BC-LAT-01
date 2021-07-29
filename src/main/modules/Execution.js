import { parserActionsArray } from './Scenario.js';

for (var index = 0; index < parserActionsArray.lenght; index++){
    (parserActionsArray[index].action)();
}
