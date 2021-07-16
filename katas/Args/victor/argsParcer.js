import { ArgsShema } from "./argsShema.js";

const argStrings = '-l -p 8080 -d /usr/logs';
const argsSplit = argStrings.split(' ');
const argsData = new ArgsShema();

let message = '';
let log = false;
let porth = 0;
// let fileDirectory = '';

const logValidation = () => {
  if (argsSplit[0].includes('-') && '-l') log = true;
  else message = argsData.defaultMessage();
};

logValidation();

const flagsData = () => {
  if (log && argsSplit[1].includes('-') && '-p') {

    porth = parseInt(argsSplit[2]);

    const argsObj = new ArgsShema();

  }
};

flagsData();
export { logValidation };
