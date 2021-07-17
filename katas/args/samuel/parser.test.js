import { Parser } from './parser';

describe('Test for method createArgsSchema()', () => {
    test ('The method have to create and appropiate object like the one in the schema and put the value and trype as attributes', () => {
        const argsIntance = new Parser;
        let split = argsIntance.argsSplitter('-l -p 8080 -d /usr/logs');
        let flagPositions = argsIntance.getFlagsPosition(split);
        expect(argsIntance.createArgsSchema(split, flagPositions)).toEqual({
            l: { value: true, valueType: 'boolean' },
            p: { value: 8080, valueType: 'number' },
            d: { value: '/usr/logs', valueType: 'string' }
        });
        let split1 = argsIntance.argsSplitter('-p 6023 -l -h');
        let flagPositions1 = argsIntance.getFlagsPosition(split1);
        expect(argsIntance.createArgsSchema(split1, flagPositions1)).toEqual({
            p: { value: 6023, valueType: 'number' },
            l: { value: true, valueType: 'boolean' },
            h: { value: true, valueType: 'boolean' }
        });
    });
});
