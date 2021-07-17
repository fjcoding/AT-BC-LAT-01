export class Schema {
    constructor(name, defaultValue, type) {
        this.name = name;
        this.defaultValue = defaultValue;
        this.type = type;
    }
}
/*const SchemaL = new Schema("-l", false, "Boolean");
const SchemaP = new Schema("-p", 0, "Number");
const SchemaD = new Schema("-d", "", "String");

console.log(SchemaL.name +" " + SchemaL.defaultValue +" " + SchemaL.type);
console.log(SchemaP.name +" " + SchemaP.defaultValue +" " + SchemaP.type);
console.log(SchemaD.name +" " + SchemaD.defaultValue +" " + SchemaD.type);*/
