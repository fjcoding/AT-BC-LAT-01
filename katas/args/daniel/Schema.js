export class Schema {
    constructor () {
        this.schemaList = [
            {name: 'port', flag: '-p', type: 'int', defaultValue: 8080},
            {name: 'path', flag: '-d', type: 'string', defaultValue: '/usr/'},
            {name: 'booleanExample', flag: '-b', type: 'bool', defaultValue: false}
        ];
    }

    getList() {
        return this.schemaList;
    }
}