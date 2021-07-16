export class Schema {
    constructor ( inputSchema ) {
        this.schemaList = inputSchema;
    }

    putSchema( inputSchema ) {
        this.schemaList = inputSchema;
    }

    getList() {
        return this.schemaList;
    }
}