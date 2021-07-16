import { Split } from './Split.js';

test('Command should be separate part by part everytime that a space appears on it', () => {
    expect(Split('-l true -p 8080 -d /AT/AT-BC-LAT-01')).toEqual(['-l','true','-p','8080','-d','/AT/AT-BC-LAT-01']);
    expect(Split('-p 921 -l -d /D/GAMES/')).toEqual(['-p','921','-l','-d','/D/GAMES/']);
});