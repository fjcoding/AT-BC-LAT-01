export class Parser {
    createArgsSchema(argsSplitted, flagPositions) {
        let argsSplit = argsSplitted;
        let flagPosition = flagPositions;
        let argSchema = [];
        for (let index = 0; index < flagPosition.length; index++) {
            let flagValue = argsSplit[flagPosition[index]];
            let flag = flagValue.charAt(1);
            let argValue = argsSplit[flagPosition[index] + 1];
            if (flag == 'p') {
                argValue = parseInt(argValue);
            }
            let valueType = typeof(argValue);
            if (valueType === 'number') {
                argSchema[index] = { flag: flag, value: argValue,  valueType: valueType };
            } else if (argValue === undefined){
                argSchema[index] = { flag: flag, value: true, valueType: 'boolean' };
            } else if (argsSplit[flagPosition[index] + 1].includes('-')) {
                argSchema[index] = { flag: flag, value: true, valueType: 'boolean' };
            } else if (valueType === 'string') {
                argSchema[index] = { flag: flag, value: argValue, valueType: valueType };
            }
        }
        return argSchema;
    }

    schemaValidation(schemaFlagArray, argFlagArray) {
        let schemaTemplate = schemaFlagArray;
        let argSchemaArray = argFlagArray;
        let validationResult = false;
        for (let index = 0; index < argSchemaArray.length; index++) {
            if (schemaTemplate.includes(argSchemaArray[index]) == true) {
                validationResult = true;
            } else if (schemaTemplate.includes(argSchemaArray[index]) == false) {
                validationResult = false;
                break;
            }
        }
        return validationResult;
    }

    showArgsSchema(validation, argSchema){
        let valid = validation;
        let argArray = argSchema;
        if (valid) {
            return argArray;
        } else {
            return 'Error, the flag in command-line doesn\'t exist';
        }
    }
}