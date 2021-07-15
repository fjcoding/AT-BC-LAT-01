import { Args } from './Args.js';

let myArgs = new Args('-p 8080 -d /usr/');

console.log(myArgs.getArgsList());