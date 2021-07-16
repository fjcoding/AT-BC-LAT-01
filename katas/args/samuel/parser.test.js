import { Parser } from './parser';
import { Schema } from './args' ; 

describe('Test for method getFlagsPositions()', () => {
    test ('The position method will get us the flags position in the input', () => {
        const argsIntance = new Parser;
        let split = argsIntance.argsSplitter('-l -p 8080 -d /usr/logs');
        expect(argsIntance.getFlagsPosition(split)).toEqual([0, 1, 3]);
        let split1 = argsIntance.argsSplitter('-p 6023 -l -h');
        expect(argsIntance.getFlagsPosition(split1)).toEqual([0, 2, 3]);
    });
});
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
describe('Test for method schemaValidation()', () => {
    test ('The method receive the schema and search if the flag we have in the parser is valid, this method return a boolean', () => {
        const schemaInstance = new Schema();
        const parseInstance = new Parser;
        let schema = schemaInstance.giveSchema();
        let split = parseInstance.argsSplitter('-l -p 8080 -d /usr/logs');
        let flagPositions = parseInstance.getFlagsPosition(split);
        let argSchema = parseInstance.createArgsSchema(split, flagPositions);
        expect(parseInstance.schemaValidation(schema, argSchema)).toEqual(true);
    });
});
