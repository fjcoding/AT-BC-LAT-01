import { Flag } from './Flag.js';
export class Parser {
    separateArguments = (args) => {
        const separateArguments = args.split(' ');

        return separateArguments;
    };

    assignFlag = (separateArguments, schema) => {
        let flagCharacter = null;
        let flagValue = null;
        let flagArray = new Array();
        const parse = new Parser();

        for (let index = 0; index < separateArguments.length; index++) {

            if (parse.checkIfItsFlag(separateArguments[index], schema)) {
                flagCharacter = separateArguments[index];

                if (!parse.checkIfItsFlag(separateArguments[index + 1], schema)) {
                    flagValue = separateArguments[index + 1];

                    flagArray.push(new Flag(flagCharacter, flagValue));
                } else {
                    flagArray.push(new Flag(flagCharacter));
                }
            }
        }
        return flagArray;
    };

    itsAValidValue = (schema, flag) => {
        let validValue = false;
        let typeOfValue = null;
        schema.forEach(schema => {
            if (flag.character == schema.name) {
                typeOfValue = typeof (flag.value);
                validValue = typeOfValue === schema.type;
            }
        });
        return validValue;
    }

    checkIfItsFlag = (arg, schema) => {
        let itsFlag = false;
        schema.forEach(schema => {
            if (arg == schema.name) {
                itsFlag = true;
            }
        });
        return itsFlag;
    };

    checkIfItsEmpty = (flag) => {
        let itsEmpty = false;
        if (flag == null) {
            itsEmpty = true;
        }
        return itsEmpty;
    }

    replaceDefaultValue = (flag, schema) => {
        schema.forEach(schema => {
            if (flag.character === schema.name && flag.value == null) {
                flag.value = schema.defaultValue;
            }
        });
        return flag;
    }

    errorControlMessages = (flag, schema, arg) => {
        let returnVariable = false;
        try {
            const parse = new Parser();
            if (parse.checkIfItsFlag(arg, schema) == false) {
                throw (arg + ' its not a valid flag');
            } else if (!parse.itsAValidValue(schema, flag)) {
                throw ('The value of the ' + arg + ' flag, does not have the correct value type');
            }
            returnVariable = true;
        } catch (error) {
            returnVariable = false;
        }
        return returnVariable;
    }
}