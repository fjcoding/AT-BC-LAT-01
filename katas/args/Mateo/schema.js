export class Schema {
    constructor() {
        this.initialSchema = [
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
        ];
    }

    giveSchema() {
        return this.initialSchema;
    }

    getFlagAndValueType(flagArray) {
        let arrayProperties = [];
        for (let index = 0; index < flagArray.length; index++) {
            arrayProperties[index] = flagArray[index].flag + ' ' + flagArray[index].valueType;
        }
        return arrayProperties;
    }
}