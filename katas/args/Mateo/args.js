class Parser {

}

export class Schema {
    argsSchema = {
        l : {
            defaultValue: true,
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

    }
    giveSchema() {
        return this.argsSchema;
    }
}