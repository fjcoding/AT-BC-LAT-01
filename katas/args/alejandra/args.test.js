import { splitCommand } from "./args";
import { Schema } from "./Schema";

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
