export class Schema {
  constructor() {
    this.numberOfFlags = 3;
    this.schemaArgs = [
      {
        flag: "l",
        name: "logging",
        type: "boolean",
        defaultValue: false,
      },
      {
        flag: "p",
        name: "port",
        type: "number",
        defaultValue: 0,
      },
      {
        flag: "d",
        name: "directory",
        type: "string",
        defaultValue: "",
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

  isAValidArg(flagToValidate) {
    const isValid = this.findArg(flagToValidate) ? true : false;
    return isValid;
  }

  getDefaultValue(flag) {
    const arg = this.findArg(flag);
    return arg.defaultValue;
  }
}
