import { Schema } from "./args";

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
    schemaValidation(schema, argSchema) {
        let schemaTemplate = schema;
        let argSchemaObject = argSchema;
        let validationResult = false;
        let argSchemaFlagName = Object.keys(argSchemaObject);
        let schemaFlagName = Object.keys(schemaTemplate);
        for (let index = 0; index < argSchemaFlagName.length; index++) {
            for (let indexSchema = 0; indexSchema < schemaFlagName.length; indexSchema++) {
                if (schemaFlagName[indexSchema].indexOf(argSchemaFlagName[index], 0) != -1) {
                    validationResult = true;
                } else if (schemaFlagName[indexSchema].indexOf(argSchemaFlagName[index], 0) != -1) {
                    validationResult = false;
                    break;
                }
            }
        }
        return validationResult;
    }
}
const schemaInstance = new Schema;
const parseInstance = new Parser;
let schema = schemaInstance.giveSchema();
let split = parseInstance.argsSplitter('-l -p 8080 -d /usr/logs');
let flagPositions = parseInstance.getFlagsPosition(split);
let argSchema = parseInstance.createArgsSchema(split, flagPositions);
parseInstance.schemaValidation(schema, argSchema);