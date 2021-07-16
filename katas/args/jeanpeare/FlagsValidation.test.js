import { FlagValidation, ValueValidation } from './FlagsValidation.js';

test('Command array is validated to verify if the flags were correctly initialized', () => {
    expect(FlagValidation([ '-l', '0', '', '8080', '-d', '/AT/AT-BC-LAT-01' ])).toEqual(['-l','Flag \'Port\' not initialized','-d']);
    expect(FlagValidation([ '', 'true', '-d', '8080', '-p', '/AT/AT-BC-LAT-01' ])).toEqual(['Flag \'Logging\' not initialized','-p','-d']);
    expect(FlagValidation([ '-m', 'true', '-', '8080', '-p', '/AT/AT-BC-LAT-01' ])).toEqual(['Flag \'Logging\' not initialized','-p','Flag \'Directory\' not initialized']);
    expect(FlagValidation([ '-m', 'true', '-', '8080', '-p', '358415' ])).toEqual(['Flag \'Logging\' not initialized','-p','Flag \'Directory\' not initialized']);    
});

test('Command array is validated to verify if the data type after the flags is correctly typed', () => {
    expect(ValueValidation([ '-l', '0', '', '8080', '-d', '/AT/AT-BC-LAT-01' ])).toEqual([true,'','/AT/AT-BC-LAT-01']);
    expect(ValueValidation([ '', 'true', '-d', '-8080', '-p', '/AT/AT-BC-LAT-01' ])).toEqual(['','Value type not valid','-8080']);
    expect(ValueValidation([ '-l', '', '', '8080', '-d', '/AT/AT-BC-LAT-01' ])).toEqual([false,'','/AT/AT-BC-LAT-01']);
    expect(ValueValidation([ '-d', '', '-l', '', '-p', '' ])).toEqual([false,'0','']);
    expect(ValueValidation([ '-l', 'true', '-d', '-8080', '-p', '/AT/AT-BC-LAT-01' ])).toEqual([true,'Value type not valid','-8080']);
    expect(ValueValidation([ '-m', 'true', '-', '8080', '-p', '358415' ])).toEqual(['',358415,'']);  
});