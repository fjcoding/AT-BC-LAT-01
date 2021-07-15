class Parser {

}

export class Schema {
    argsSchema = {
        l : {
            value: true,
            valueType: 'boolean'
        },
        p : {
            value: 0,
            valueType: 'number'
        },
        d : {
            value: '',
            valueType: 'string'
        },
        h : {
            value: true,
            valueType: 'boolean'
        }
    }
    giveSchema() {
        return this.argsSchema;
    }
}