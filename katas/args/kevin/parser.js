import { Flag } from "./flag.js";
import { Schema } from "./schema.js";
export class Parser {
    separateArguments = (args) => {
        const separateArguments = args.split(" ");

        return separateArguments;
    };

    assignFlag = (separateArguments, schema) => {
        let flagCharacter = null;
        let flagValue = null;
        let flagArray = new Array();
        let newFlag;
        const parse = new Parser();

        for (let index = 0; index < separateArguments.length; index++) {

            if (parse.checkIfItsFlag(separateArguments[index], schema)) {
                flagCharacter = separateArguments[index];

                if (!parse.checkIfItsFlag(separateArguments[index + 1], schema)) {
                    flagValue = separateArguments[index + 1];

                    newFlag = flagArray.push(new Flag(flagCharacter, flagValue));
                } else {
                    newFlag = flagArray.push(new Flag(flagCharacter));
                }
            }
        }
        return flagArray;
    };

    fillEmptyField = (schema, flag, defaultValue) => {

    }
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
        console.log(itsEmpty)
        return itsEmpty;
    }
    replaceDefaultValue = (flag, schema) => {
        console.log(flag);
        schema.forEach(schema => {
            if (flag.character === schema.name && flag.value == null ) {
                flag.value = schema.defaultValue;
            }
        });
        console.log(flag);
        return flag;
    }

}
let schemaL = new Schema("-l", false, "boolean");
let schemaP = new Schema("-p", 0, "number");
let schemaD = new Schema("-d", "asd", "string");
const schema = [schemaL, schemaP, schemaD];
const flag = new Flag("-d", "qwert");
let parse = new Parser();
let arg = parse.separateArguments("-l -p 8080 -d /usr/logs");

//parse.checkIfItsFlag("-l", schema);
//parse.assignFlag(arg, schema);
//console.log(parse.assignFlag(arg,schema))
//parse.itsAValidValue(schema, flag);
parse.replaceDefaultValue(flag, schema);