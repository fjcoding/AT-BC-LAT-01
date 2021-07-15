import { Parser } from "./parser";

test ('The position method will get us the flags position in the input', () => {
    const argsIntance = new Parser;
    let split = argsIntance.argsSplitter('-l -p 8080 -d /usr/logs');
    expect(argsIntance.getFlagsPosition(split)).toEqual([0, 1, 3]);
})