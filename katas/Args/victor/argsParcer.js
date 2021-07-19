import { ArgsShema } from './argsShema.js';

const argStrings = '-l -p 8080 -d /usr/logs';
const argsSplit = argStrings.split(' ');
let argsObj = new ArgsShema();
let message = '';
let log = false;
let port = 0;
let fileDirectory = '';
let pass = false;

const logValidation = () => {
    if (argsSplit[0] == '-l' && argsSplit[4].includes('/')) log = true;
    else if (!argsSplit[0].includes('-')) message = 'the flag data must start with "-" symbol'; 
    if (!log && argsSplit[0].includes('-')) message = argsObj.defaultMessage();
    return log;
};

const portValadation = () => {
    if (log && argsSplit[1].includes('-p')) port = Number(argsSplit[2]);
    else if (!argsSplit[1].includes('-')) message = 'the flag data must start with "-" symbol';
    if (isNaN(port)) message = 'the porth must be a valid Number';
};

const directoryValidation = () =>{
    if (log && !isNaN(port) && argsSplit[3].includes('-d')) {
        fileDirectory = argsSplit[4];
        pass = true;
    }else if (!argsSplit[3].includes('-')) message = 'the flag data must start with "-" symbol';
};

const argsbuild = () => {
    if(pass) argsObj = new ArgsShema('-l',log,'-p',port,'-d',fileDirectory);
};

logValidation();
portValadation();
directoryValidation(); 
argsbuild();

export { logValidation, portValadation, directoryValidation, argsbuild };
