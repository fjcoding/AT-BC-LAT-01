export class Schema {
    constructor ( inputSchema ) {
        this.schemaList = inputSchema;
    };

    putSchema( inputSchema ) {
        this.schemaList = inputSchema;
    };

    getList() {
        return this.schemaList;
    };

    validateSchema( inputArgs ) {
        // Return true if the arguments belongs to the schema
        let isValid = true;
        inputArgs.forEach( arg => {
            if ( this.validateArg(arg) == false ) isValid = false;
        });
        return isValid;
    };

    validateArg( inputArg ) {
        // Return true if the current input argument is in the schema args
        let isInSchema = false;
        this.schemaList.forEach( schemaArg => {
            if ( inputArg.flag == schemaArg.flag ) isInSchema = true;
        });
        return isInSchema;
    };
};
