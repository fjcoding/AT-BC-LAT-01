export class Parser {
    argsSplitter(argsInput) {
        let argsInputSplit = argsInput.split(' ');
        return argsInputSplit;
    }
    getFlagsPosition(argsSplitted) {
        let argsSplit = argsSplitted;
        let positionList = [];
        let positionListCounter = 0;
        for (let index = 0; index < argsSplit.length; index++) {
            if (argsSplit[index].includes('-')) {
                positionList[positionListCounter] = index;
                positionListCounter++;
            }
        }
        return positionList;
    }
    createArgsSchema(argsSplitted, flagPositions) {
        let argsSplit = argsSplitted;
        let flagPosition = flagPositions;
        let argSchema = {};
        for (let index = 0; index < flagPosition.length; index++) {
            let flagValue = argsSplit[flagPosition[index]];
            let flag = flagValue.charAt(1);
            let argValue = argsSplit[flagPosition[index] + 1];
            if (flag == 'p') {
                argValue = parseInt(argValue);
            }
            let valueType = typeof(argValue)
            if (valueType === 'number') {
                argSchema[flag] = { value: argValue,  valueType: valueType };
            } else if (argValue === undefined){
                argSchema[flag] = { value: true, valueType: 'boolean' };
            } else if (argsSplit[flagPosition[index] + 1].includes('-')) {
                argSchema[flag] = { value: true, valueType: 'boolean' };
            } else if (valueType === 'string') {
                argSchema[flag] = { value: argValue, valueType: valueType };
            }
        }
        return argSchema;
    }
}
const parse = new Parser;
let split1 = parse.argsSplitter('-p 6023 -l -h');
let flagPositions1 = parse.getFlagsPosition(split1);
parse.createArgsSchema(split1, flagPositions1);
