import {FlagsCreation} from './FlagsCreation.js';

test('Flags should be created with the correct data type and atributes complete', () => {
    expect(new FlagsCreation('l', 'logging', Boolean(), false)).toEqual({'DefaultValue': false, 'FlagDescription': 'logging', 'FlagName': 'l', 'FlagType': 'boolean'});
    expect(new FlagsCreation('p', 'port', Number(), 0)).toEqual({'DefaultValue': 0, 'FlagDescription': 'port', 'FlagName': 'p', 'FlagType': 'number'});
    expect(new FlagsCreation('d', 'directory', String(), '')).toEqual({'DefaultValue': '', 'FlagDescription': 'directory', 'FlagName': 'd', 'FlagType': 'string'});
});