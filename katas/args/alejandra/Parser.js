import { Args } from './Args';
import { Schema } from './Schema';

export class Parser {
    constructor() {
        this.numberOfFlags = 3;
        this.ParserArgsList = new Args();
        this.Schema = new Schema();
    }
    getParsedArgs() {
        return this.ParserArgsList.getArgsList();
    }

    getArgParsedValue(flag) {
        return this.ParserArgsList.getArgValue(flag);
    }

    isAFlag(flagString) {
        if (
            typeof flagString === 'undefined' ||
            flagString[0] !== '-' ||
            flagString.length !== 2 ||
            !isNaN(parseInt(flagString[1]))
        ) {
            return false;
        } else return true;
    }

    setParserArgs(argumentList) {
        argumentList.forEach((element, index) => {
            if (this.isAFlag(element)) {
                let value;
                let nextElement = argumentList[index + 1];

                if (
                    this.isAFlag(nextElement) ||
                    typeof nextElement === 'undefined'
                ) {
                    value = this.Schema.getDefaultValue(element[1]);
                } else {
                    value = nextElement;
                }
                this.handleInvalidArgs(element[1], value); //If its not a valid arg it throws an error
                this.ParserArgsList.addArg(element[1], value);
            }
        });
    }

    handleInvalidArgs(flagToValidate, value) {
        if (!this.Schema.isAValidFlag(flagToValidate, value)) {
            throw Error(
                `The ${flagToValidate} flag its NOT recognized by the schema`
            );
        } else if (!this.Schema.isAValidValue(flagToValidate, value)) {
            throw TypeError(
                `The argument value {${value}} doesnt match the type {${this.Schema.getFlagType(
                    flagToValidate
                )}} required for the flag {${flagToValidate}}`
            );
        }
    }
}
