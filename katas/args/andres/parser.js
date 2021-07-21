import { Argument } from './argument';

export class Parser {
    constructor (newSchemaString) {
        this.schemaArray = this.splitArgumentList(newSchemaString); // splits and filters the schema args string
        this.flagArray = this.takeArgumentList(this.schemaArray); // stores an array of arguments

    }
    returnFlags () {
        return this.flagArray;
    }
    returnSchema () {
        return this.schemaArray;
    }
    splitArgumentList(argumentListString) {
        // TODO: optimize regex
        const splitCriteriaExpression = /[-](\D)[ ]*/; // regex to check for flags. It includes the one boolean arg case
        let unfilteredArgumentArray = argumentListString.split(splitCriteriaExpression); // splits the string using a regex criteria
        unfilteredArgumentArray = unfilteredArgumentArray.filter(Boolean); // remove empty strings from arguments array
        for (let index = 0; index < unfilteredArgumentArray.length; index++) { // remove spaces from nonflags substrings
            let substring = String(unfilteredArgumentArray[index]);
            unfilteredArgumentArray[index] = substring.replace(/ $/,'');
        }
        return unfilteredArgumentArray;
    }
    takeArgumentList (argumentListString) { //return an array of Argument objects
        let newFlagArray = [];
        for (let index = 0; index < argumentListString.length; index++) {
            if (argumentListString[index].length == 1) { // if its flag
                if (index+1 == argumentListString.length || argumentListString[index+1].length == 1) { // check if there's no next item or next item is a flag 
                    let flag = new Argument(argumentListString[index], false); // a boolean flag with false value has no default value in its schema declaration
                    newFlagArray.push(flag);
                } else if (argumentListString[index+1] === true) { // checks if next item is a true boolean value
                    let flag = new Argument(argumentListString[index], true);
                    newFlagArray.push(flag);
                } else if (!isNaN(String(argumentListString[index+1]))) { // checks if the next item is a number
                    let flag = new Argument(argumentListString[index], Number(argumentListString[index+1]));
                    newFlagArray.push(flag);
                } else { // if nothing else, this is a directory flag
                    let flag = new Argument(argumentListString[index],argumentListString[index+1]);
                    newFlagArray.push(flag);
                }
            }
        }
        return newFlagArray;
    }
}