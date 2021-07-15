export class Args {
    constructor( inputArgs ) {
        this.argsString = inputArgs;
    }

    getArgsList() {
        const argsSplitted = this.argsString.split(" ");
        let index = 0;
        let argsList = [];
        
        while ( index < argsSplitted.length ) {
            // Push a new arg object into the argsList
            // Evaluates if the next item in the array is a number or a flag
            const currentItem = argsSplitted[index];
            const nextItem = argsSplitted[index + 1];

            if ( !isNaN(nextItem) || nextItem[0] != '-') {
                argsList.push({flag: currentItem, value: nextItem});
                index = index + 2;
            } else {
                argsList.push({flag: currentItem, value: ''});
                index++;
            }
        }

        return argsList;
    }
}