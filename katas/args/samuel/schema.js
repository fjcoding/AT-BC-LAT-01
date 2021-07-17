export class Schema {
    constructor() {
        this.argsSchema = [
            {
                flag: 'l',
                flagName: 'logging',
                defaultValue: false,
                valueType: 'boolean'
            },
            {
                flag: 'p',
                flagName: 'port',
                defaultValue: 0,
                valueType: 'number'
            },
            {
                flag: 'd',
                flagName: 'directory',
                defaultValue: '',
                valueType: 'string'
            },
            {
                flag: 'h',
                flagName: 'help',
                defaultValue: false,
                valueType:  'boolean'
            }
        ];
    }
    giveSchema() {
        return this.argsSchema;
    }
}