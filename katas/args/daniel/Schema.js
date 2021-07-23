export class Schema {
    constructor (inputSchema) {
        this.schemaList = inputSchema;
    }

    putSchema(inputSchema) {
        this.schemaList = inputSchema;
    }

    getList() {
        return this.schemaList;
    }

    validateSchema(inputArgs) {
        // Return true if the arguments belongs to the schema
        let isValid = true;
        inputArgs.forEach(arg => {
            if (this.validateFlag(arg.flag) == false) isValid = false;
        });
        return isValid;
    }

    validateFlag(flag) {
        // Return true if the current input flag is in the schema args
        let isInSchema = false;
        this.schemaList.forEach(schemaArg => {
            if (flag == schemaArg.flag) isInSchema = true;
        });
        return isInSchema;
    }

    getPropertyOfArg(flag, propertyRequired) {
        let property = undefined;
        if (this.validateFlag(flag)) {
            this.schemaList.forEach(schemaArg => {
                if (flag == schemaArg.flag) property = schemaArg[propertyRequired];
            });
        }
        return property;
    }
}
