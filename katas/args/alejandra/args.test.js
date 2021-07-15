import { splitCommand } from "./argsParser";
import { Schema } from "./Schema";
import { Parser } from "./Parser";
import { Args } from "./Args";

describe("Parser", () => {
  test("Test if the splitComand function splits the command by space", () => {
    expect(splitCommand("-l true")).toEqual(["-l", "true"]);
    expect(splitCommand("-l false -d /usr/logs")).toEqual([
      "-l",
      "false",
      "-d",
      "/usr/logs",
    ]);
    expect(splitCommand("-l -p 8080 -d /usr/logs")).toEqual([
      "-l",
      "-p",
      "8080",
      "-d",
      "/usr/logs",
    ]);
  });
});

describe("Schema class", () => {
  const schemaInstance = new Schema();

  test("Test if the getSchemaArgsList method works", () => {
    expect(schemaInstance.getSchemaArgsList()).toEqual([
      {
        flag: "l",
        name: "logging",
        type: "boolean",
        defaultValue: false,
      },
      {
        flag: "p",
        name: "port",
        type: "number",
        defaultValue: 0,
      },
      {
        flag: "d",
        name: "directory",
        type: "string",
        defaultValue: "",
      },
    ]);
  });

  test("Test if the isAValidArg method verifies if it exist on the schema args list", () => {
    expect(schemaInstance.isAValidArg("p")).toBe(true);
    expect(schemaInstance.isAValidArg("l")).toBe(true);
    expect(schemaInstance.isAValidArg("x")).toBe(false);
    expect(schemaInstance.isAValidArg("w")).toBe(false);
  });

  test("Test if the getDefaultValue method returns the correct default value for the given flag", () => {
    expect(schemaInstance.getDefaultValue("p")).toBe(0);
    expect(schemaInstance.getDefaultValue("l")).toBe(false);
    expect(schemaInstance.getDefaultValue("d")).toBe("");
  });
});

describe("Parser Class", () => {
  const parserInstance = new Parser();
  test("Test if the function it's a flag can identify correctly a Flag", () => {
    expect(parserInstance.isAFlag("-l")).toBe(true);
    expect(parserInstance.isAFlag("-lo")).toBe(false);
    expect(parserInstance.isAFlag("lo")).toBe(false);
    expect(parserInstance.isAFlag("-0")).toBe(false);
    expect(parserInstance.isAFlag("-5")).toBe(false);
  });

  test("Test if the function setParserArgs adds the correct flags and values", () => {
    const parserInstance1 = new Parser();
    const parserInstance2 = new Parser();
    const parserInstance3 = new Parser();
    parserInstance1.setParserArgs(["-l", "-p", "8080", "-d", "/usr/logs"]);
    expect(parserInstance1.gerParserArgs()).toEqual([
      { flag: "l", value: false },
      { flag: "p", value: 8080 },
      { flag: "d", value: "/usr/logs" },
    ]);

    parserInstance2.setParserArgs(["-l", "-d", "/usr/logs"]);
    expect(parserInstance2.gerParserArgs()).toEqual([
      { flag: "l", value: false },
      { flag: "d", value: "/usr/logs" },
    ]);
    parserInstance3.setParserArgs(["-p"]);
    expect(parserInstance3.gerParserArgs()).toEqual([{ flag: "p", value: 0 }]);
  });

  test("Test getArgValue returns the expected value", () => {
    const parserInstance = new Parser();
    parserInstance.setParserArgs(["-p"]);
    expect(parserInstance.getArgParsedValue("p")).toBe(0);
  });
});
