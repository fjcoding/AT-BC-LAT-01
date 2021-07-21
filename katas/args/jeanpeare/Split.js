import { FlagsCreation, Command } from './FlagsCreation.js';

export const FlagL = new FlagsCreation (
    '-l',
    'logging',
    Boolean(),
    false);

export const FlagP = new FlagsCreation (
    '-p',
    'port',
    Number(),
    '0');

export const FlagD = new FlagsCreation (
    '-d', 
    'directory',
    String(),
    '');

export const FlagNamesArray = [FlagL.FlagName,FlagP.FlagName,FlagD.FlagName];
export const FlagTypesArray = [FlagL.FlagType,FlagP.FlagType,FlagD.FlagType];
export const CommandArray = Command.split(' ');

export function Split(Command){
    const CommandArray = Command.split(' ');
    return CommandArray;   
}