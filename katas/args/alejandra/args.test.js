import { splitCommand } from './argsParser.js';

describe('Parser', () => {
    test('Test if the splitComand function splits the command by space', () => {
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
