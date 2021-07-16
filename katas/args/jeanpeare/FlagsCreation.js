export class FlagsCreation {
    constructor(FlagName, FlagDescription, FlagType, DefaultValue){
        this.FlagName = FlagName;
        this.FlagDescription = FlagDescription;
        this.FlagType = typeof(FlagType);
        this.DefaultValue = DefaultValue;
    }
}