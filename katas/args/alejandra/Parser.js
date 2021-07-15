import { Args } from "./Args";
import { Schema } from "./Schema";

export class Parser {
  constructor(argumentList) {
    this.numberOfFlags = 3;
    this.ParserArgsList = new Args();
    this.Schema = new Schema();
  }

  isAFlag(flagString) {
    if (
      typeof flagString === "undefined" ||
      flagString[0] !== "-" ||
      flagString.length !== 2 ||
      !isNaN(parseInt(flagString[1]))
    ) {
      return false;
    } else return true;
  }

  setParserArgs(argumentList) {
    argumentList.forEach((element, index) => {
      if (this.isAFlag(element)) {
        let value;
        let nextElement = argumentList[index + 1];

        if (this.isAFlag(nextElement) || typeof nextElement === "undefined") {
          value = this.Schema.getDefaultValue(element[1]);
        } else {
          value = nextElement;
        }
        this.ParserArgsList.addArg(element[1], value);
      }
    });
  }

  gerParserArgs() {
    return this.ParserArgsList.getArgsList();
  }

  getArgParsedValue(flag) {
    return this.ParserArgsList.getArgValue(flag);
  }
}
