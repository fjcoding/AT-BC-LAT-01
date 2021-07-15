//import {Flag} from "./flag"
import { array } from "yargs";
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
        const flag = new fla();
        for (let i = 0; i < separateArguments.length - 1; i++) {
            if (separateArguments.checkIfIsFlag(separateArguments[i], schema)) {

            }
        }
    };

    checkIfIsFlag = (arg, schema) => {
        let itsFlag = false;
        schema.forEach((element) => {
            if (arg == schema.name) {
                itsFlag = true;
            }
        });
        return itsFlag
    };

}
let schemaL = new Schema("-l", false, "Boolean");
let schemaP = new Schema("-p", false, "Boolean");
let schemaD = new Schema("-d", false, "Boolean");
const schema = [schemaL, schemaP, schemaD];

let parse = new Parser();
let arg = parse.separateArguments("-l -p 8080 -d /usr/logs");

parse.checkIfIsFlag(arg, schema);
