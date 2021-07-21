import {FlagNamesArray, FlagP} from './Split.js';

var ValidatedFlags = ['','',''];
var ValidatedValues = ['','',''];

export function FlagValidation(CommandArray) {
    Reset();
    var index = 0;
    var arraylength = 0;
    arraylength = CommandArray.length;
    while (index < arraylength) {
        if(CommandArray[index] == FlagNamesArray[0]) {
            ValidatedFlags[0] = '-l';
        }
        else if (CommandArray[index] == FlagNamesArray[1]) {
            ValidatedFlags[1] = '-p';
        }
        else if (CommandArray[index] == FlagNamesArray[2]) {
            ValidatedFlags[2] = '-d';
        }
        index ++;
    }
    FlagInvalidation();
    return ValidatedFlags; 
}

export function FlagInvalidation() {

    if (ValidatedFlags[0] != '-l') {
        ValidatedFlags[0] = 'Flag \'Logging\' not initialized';
    }
    if (ValidatedFlags[1] != '-p') {
        ValidatedFlags[1] = 'Flag \'Port\' not initialized';
    }
    if (ValidatedFlags[2] != '-d') {
        ValidatedFlags[2] = 'Flag \'Directory\' not initialized';
    }
    return ValidatedFlags; 
}

export function ValueValidation(CommandArray) {
    Reset();
    var index = 0;
    var arraylength = 0;
    arraylength = CommandArray.length;
    while (index < arraylength) {
        if(CommandArray[index] == FlagNamesArray[0]) {            
            ValidatedValues[0] = Boolean(CommandArray[index+1]);
        }
        else if (CommandArray[index] == FlagNamesArray[1]) {
            if (CommandArray[index+1] == '') {
                ValidatedValues[1] = FlagP.DefaultValue;
            }
            else if (parseInt(CommandArray[index+1]).toString() == 'NaN') {
                ValidatedValues[1] = 'Value type not valid';
            }
            else {
                ValidatedValues[1]=parseInt(CommandArray[index+1]);
            }
        }
        else if (CommandArray[index] == FlagNamesArray[2]) {
            ValidatedValues[2] = CommandArray[index+1];
        }
        index ++;
    }
    return ValidatedValues; 
}

function Reset(){
    ValidatedFlags=['','',''];
    ValidatedValues=['','',''];
}