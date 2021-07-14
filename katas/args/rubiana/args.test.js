import { argsClass } from './args.js';

//-l -p 8080 -d /usr/logs

test("argsClass should be able to return an array with each value passed by the flags", () => {
    const argsClassInstance = new argsClass;
    expect(argsClassInstance.checkInputType('-p 8080 -d /usr/logs')).toBe("[false, 8080, '/usr/logs']");
    expect(argsClassInstance.checkInputType('-l -p 8080 -d /usr/logs')).toBe('[true, 8080, "/usr/logs"]');
})