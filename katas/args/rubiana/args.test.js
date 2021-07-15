import { schemaClass } from './args.js';

//-l -p 8080 -d /usr/logs

test("schemaClass should be able to return an array with each value passed by the flags", () => {
    const schemaClassInstance = new schemaClass;
    expect(schemaClassInstance.validate('-p 8080 -d /usr/logs')).toEqual(["8080", "/usr/logs"]);
    expect(schemaClassInstance.validate('-l -p 8080 -d /usr/logs')).toEqual(["true", "8080", "/usr/logs"]);
})