export class Args {
    constructor( inputArgs ) {
        if (inputArgs == undefined) {
            this.argsString = '';
        } else {
            this.argsString = inputArgs;
        };
    };

    putArgs( inputArgs ) {
        if (inputArgs == undefined) {
            this.argsString = '';
        } else {
            this.argsString = inputArgs;
        };
    };

    getArgs () {
        return this.argsString;
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
            let dashNextItem = false;

            // Verifies if next item start with '-'
            if ( nextItem != undefined ) {
                if ( nextItem[0] != '-' ) dashNextItem = true;
            }

            // Verifies if the next item in the argsSplitted is a flag or value
            if ( !isNaN(nextItem) || dashNextItem ) {
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