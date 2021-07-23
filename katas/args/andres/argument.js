export class Argument {
    constructor (newFlagName, newArgValue) {
        this.flag = newFlagName;
        this.argValue = newArgValue;
    }

    returnArgument() {
        return this.flag + this.argValue;
    }
}