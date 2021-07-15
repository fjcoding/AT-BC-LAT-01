import { expect } from "@jest/globals";
import { ArgsShema } from "./argsShema";

it('checking if the constructor properly works', () => {
    const argsObj = new ArgsShema('-l', true,'-p', 8080, '-d' , '/usr/logs');
    expect(argsObj.logFlag).toBe('-l');
    expect(argsObj.logValue).toBe(true);
    expect(argsObj.porthFlag).toBe('-p');
    expect(argsObj.portValue).toBe(8080);
    expect(argsObj.pathFlag).toBe('-d');
    expect(argsObj.pathValue).toBe('/usr/logs');
});
