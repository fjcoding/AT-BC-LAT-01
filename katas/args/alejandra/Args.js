export class Args {
  constructor() {
    this.argsList = [];
  }

  addArg(flag, value) {
    if (!isNaN(parseInt(value))) {
      value = parseInt(value);
    }

    this.argsList.push({
      flag: flag,
      value: value,
    });
  }

  getArgsList() {
    return this.argsList;
  }

  findArg(flagToValidate) {
    const args = this.argsList;
    const resultArg = args.find((arg) => arg.flag === flagToValidate);
    return resultArg;
  }

  getArgValue(flag) {
    const arg = this.findArg(flag);
    return arg.value;
  }
}
