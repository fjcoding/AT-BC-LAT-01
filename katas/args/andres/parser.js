export class Parser {
    constructor (newSchemaString) {
        this.schemaArray = this.splitArgumentList(newSchemaString);
        // stores a list of arguments
    }
    splitArgumentList(argumentListString) {
        // TODO: optimize regex
        const splitCriteriaExpression = /[-](\D)[ ]*/; // regex to check for flags. It includes the one boolean arg case
        let unfilteredArgumentArray = argumentListString.split(splitCriteriaExpression); // splits the string using a regex criteria
        unfilteredArgumentArray = unfilteredArgumentArray.filter(Boolean); // remove empty strings from arguments array
        for (let index = 0; index < unfilteredArgumentArray.length; index++) { // remove spaces from nonflags substrings
            let substring = String(unfilteredArgumentArray[index]);
            substring = substring.replace(/ $/,'');
            unfilteredArgumentArray[index] = substring;
        }
        return unfilteredArgumentArray;
    }
    returnSchema () {
        return this.schemaArray;
    }
    /*
    takeArgumentList (argumentListString) {
        return 0;
    }
    */
}