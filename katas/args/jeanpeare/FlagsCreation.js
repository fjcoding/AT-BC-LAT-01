export class FlagsCreation {
    constructor(FlagName, FlagDescription, FlagType, DefaultValue){
        this.FlagName = FlagName;
        this.FlagDescription = FlagDescription;
        this.FlagType = typeof(FlagType);
        this.DefaultValue = DefaultValue;
    }
    getFlagsInfo(){
        return this.FlagsCreation;
    }
}

const FlagL = new FlagsCreation (
    'l',
    'logging',
    Boolean(),
    false);

const FlagP = new FlagsCreation (
    'p',
    'port',
    Number(),
    '0');

const FlagD = new FlagsCreation (
    'd', 
    'directory',
    String(),
    '');

console.log(typeof(FlagL.FlagType),typeof(FlagP.FlagType),typeof(FlagD.FlagType));
console.log(FlagL,FlagD,FlagP);