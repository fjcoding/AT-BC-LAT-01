export class Schema {
    constructor() {
        this.numberOfFlags = 3;
        this.schemaArgs = [
            {
                flag: 'l',
                name: 'logging',
                type: 'boolean',
                defaultValue: false,
            },
            {
                flag: 'p',
                name: 'port',
                type: 'number',
                defaultValue: 0,
            },
            {
                flag: 'd',
                name: 'directory',
                type: 'string',
                defaultValue: '',
            },
        ];
    }

    getSchemaArgsList() {
        return this.schemaArgs;
    }

    findArg(flagToValidate) {
        const args = this.schemaArgs;
        const resultArg = args.find((arg) => arg.flag === flagToValidate);
        return resultArg;
    }

    isAValidFlag(flagToValidate) {
        const foundedArg = this.findArg(flagToValidate);
        return foundedArg ? true : false;
    }

    isAValidValue(flagToValidate, value) {
        const foundedArg = this.findArg(flagToValidate);
        if (foundedArg.type !== typeof value) {
            return false;
        }
        return true;
    }

    getDefaultValue(flag) {
        const arg = this.findArg(flag);
        return arg.defaultValue;
    }

    getFlagType(flag) {
        const arg = this.findArg(flag);
        return arg.type;
    }
}
