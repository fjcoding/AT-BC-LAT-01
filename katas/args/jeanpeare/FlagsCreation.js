export class FlagsCreation {
    constructor(FlagName, FlagDescription, FlagType, DefaultValue){
        this.FlagName = FlagName;
        this.FlagDescription = FlagDescription;
        this.FlagType = typeof(FlagType);
        this.DefaultValue = DefaultValue;
    }
}
export const Command = "-l true -p 8080 -d /AT/AT-BC-LAT-01"