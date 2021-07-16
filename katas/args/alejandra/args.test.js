import { splitCommand } from './argsParser.js';

describe('Parser', () => {
    test('Given a string splits it in an array by spaces', () => {
        expect(splitCommand('-l true')).toEqual(['-l', 'true']);
        expect(splitCommand('-l false -d /usr/logs')).toEqual([
            '-l',
            'false',
            '-d',
            '/usr/logs',
        ]);
        expect(splitCommand('-l -p 8080 -d /usr/logs')).toEqual([
            '-l',
            '-p',
            '8080',
            '-d',
            '/usr/logs',
        ]);
    });
});
