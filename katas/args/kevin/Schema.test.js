import { Schema } from "./Schema.js";
test("Validate that the Schema for Logging was created correctly with his name, default value and type of value", () => {
    const schemaL = new Schema("-l", false,"boolean");
    expect(schemaL.name).toBe("-l")
    expect(schemaL.defaultValue).toBe(false);
    expect(schemaL.type).toBe("boolean");
})
test("Validate that the Schema for Port was created correctly with his name, default value and type of value", () => {
    const schemaL = new Schema("-p", 0, "number");
    expect(schemaL.name).toBe("-p")
    expect(schemaL.defaultValue).toBe(0);
    expect(schemaL.type).toBe("number");
})
test("Validate that the Schema for Directory was created correctly with his name, default value and type of value", () => {
    const schemaL = new Schema("-d", "", "string");
    expect(schemaL.name).toBe("-d")
    expect(schemaL.defaultValue).toBe("");
    expect(schemaL.type).toBe("string");
})
