export class Parser {
    parse( args, schema ) {
        let parsedArgs = [];
        if ( schema.validateSchema(args.getArgsList()) ) {
            
            args.getArgsList().forEach(unparsedArg => {
                parsedArgs.push( this.parseArg(unparsedArg, schema) );
            });
            
        } else {
            throw new Error('The argument does not exist in the schema');
        }

        return parsedArgs;
    }

    parseArg( unparsedArg, schema ) {
        const flag = unparsedArg.flag;
        let value = unparsedArg.value;
        let parsedArg = {};

        if ( value == '' ) {
            parsedArg = {flag: flag, value: schema.getPropertyOfArg( flag, 'defaultValue')};
        } else {
            switch ( schema.getPropertyOfArg(flag, 'type') ) {
            case 'int':
                parsedArg = {flag: flag, value: parseInt(value)};
                break;
            case 'bool':
                if ( value == 'false') {
                    parsedArg = {flag: flag, value: false};
                } else {
                    parsedArg = {flag: flag, value: true};
                }
                break;
            default:
                parsedArg = {flag: flag, value: value};
            }
        }

        return parsedArg;
    }
}