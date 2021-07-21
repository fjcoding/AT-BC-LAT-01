export class Parser {
    createArgsSchema(stringSplitted, flagsPositions) {
        let stringSplit = stringSplitted;
        let flagsPosition = flagsPositions;
        let argsSchema = [];
        for (let index = 0; index < flagsPosition.length; index++) {
            let flag = stringSplit[flagsPosition[index]].charAt(1);
            let argValue = stringSplit[flagsPosition[index] + 1];
            if (flag == 'p') {
                argValue = parseInt(argValue);
            }
            let valueType = typeof(argValue);
            if (valueType === 'number') {
                argsSchema[index] = { flag: flag, value: argValue,  valueType: valueType };
            } else if (argValue === undefined){
                argsSchema[index] = { flag: flag, value: true, valueType: 'boolean' };
            } else if (stringSplit[flagsPosition[index] + 1].includes('-')) {
                argsSchema[index] = { flag: flag, value: true, valueType: 'boolean' };
            } else if (valueType === 'string') {
                argsSchema[index] = { flag: flag, value: argValue, valueType: valueType };
            }
        }
        return argsSchema;
    }
    flagAndValue(argsSchema){
        let argsProperties =[];
        for (let index = 0; index < argsSchema.length; index++) {
            argsProperties[index] = argsSchema[index].flag + ' ' + argsSchema[index].value;
        }
        return argsProperties;
    }
    schemaValidation(schemaFlagArray, argFlagArray) {
        let argSchemaArray = argFlagArray;
        let validationResult = false;
        for (let index = 0; index < argSchemaArray.length; index++) {
            if (schemaFlagArray.includes(argSchemaArray[index]) == true) {
                validationResult = true;
            } else if (schemaFlagArray.includes(argSchemaArray[index]) == false) {
                validationResult = false;
                break;
            }
        }
        return validationResult;
    }
    showArgsFlagAndValue(validation, flagAndValue){
        let argArrayStrings = flagAndValue;
        if (validation) {
            return argArrayStrings;
        } else {
            return 'Error, the flag in command-line doesn\'t exist';
        }
    }
}