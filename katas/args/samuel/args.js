export class Schema {
    constructor() {
        this.argsSchema = {
            l : {
                defaultValue: false,
                valueType: 'boolean'
            },
            p : {
                defaultValue: 0,
                valueType: 'number'
            },
            d : {
                defaultValue: '',
                valueType: 'string'
            },
            h : {
                defaultValue: false,
                valueType:  'boolean'
            }
        };
    }
    giveSchema() {
        return this.argsSchema;
    }
}

