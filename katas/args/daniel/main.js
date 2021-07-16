import { Args } from './Args.js';
import { Schema } from './Schema.js';
import { Parser } from './Parser.js';

/* let myArgs = new Args();

console.log(myArgs.putArgs('-p').getArgs()); */

/* const schema = new Schema([
    {name: 'port', flag: '-p', type: 'int', defaultValue: 8080},
    {name: 'path', flag: '-d', type: 'string', defaultValue: '/usr/'},
    {name: 'booleanExample', flag: '-b', type: 'bool', defaultValue: false}
]);

const args = new Args();
args.putArgs('-i -e -p');

//console.log(false);
console.log(schema.validateSchema(args.getArgsList())); */

const schema = new Schema([
    {name: 'port', flag: '-p', type: 'int', defaultValue: 8080},
    {name: 'path', flag: '-d', type: 'string', defaultValue: '/usr/'},
    {name: 'booleanExample', flag: '-b', type: 'bool', defaultValue: false}
]);
const args = new Args();
const parser = new Parser();

args.putArgs('-p -d /usr/ -m');

parser.parse( args, schema );