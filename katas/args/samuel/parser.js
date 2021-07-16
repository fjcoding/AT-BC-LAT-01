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
        let args = {};
        for (let index = 0; index < flagPosition.length; index++) {
            let flagValue = flagPosition[index];
            let flag = flagValue.charAt(1);
            let argValue = argsSplit[flagPosition[index] + 1];
            let valueType = typeof(argsSplit[flagPosition[index] + 1])
            if (argsSplit[flagPosition[index] + 1].includes('-')) {
                args[flag] = { value: true, valueType: 'boolean' }
            } else if (typeOf(argsSplit[flagPosition[index] + 1]) === 'number') {
                args[flag] = { value: argValue,  valueType: valueType };
            } else if (typeOf(argsSplit[flagPosition[index] + 1]) === 'string') {
                args[flag] = { value: argsValue, valueType: valueType };
            }
        }
        return args;
    }
}
