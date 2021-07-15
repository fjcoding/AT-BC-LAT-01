//-l -p 8080 -d /usr/logs
//-l (logging=boolean)  -p (port=number)  -d (directory=string)

export class schemaClass {
    constructor() {
        this.argsSchema = [{
                flag: "l",
                name: "logging",
                type: Boolean,
                defaultValue: false,
            },
            {
                flag: "p",
                name: "port",
                type: Number,
                defaultValue: 0,
            },
            {
                flag: "d",
                name: "directory",
                type: String,
                defaultValue: "",
            }
        ];
    }

    validate(arg) {
        let arrInput = arg.split(" ");
        var arr = [];

        for (let inputIndex = 0; inputIndex < arrInput.length; inputIndex++) { //tests each one of the inicial input array
            if (arrInput[inputIndex].slice(0, 1) == "-" && isNaN(arrInput[inputIndex])) { //tests if the input has "-" and it isn't a number
                let tempInput = arrInput[inputIndex].slice(1, 2); //considers the input as a flag and gets the letter
                if (tempInput == "l") { //if is the flag "l" is just consider as "true" 
                    arr.push("true")
                } else {
                    for (let schemaIndex = 0; schemaIndex < this.argsSchema.length; schemaIndex++) { //tests all the others possible flags if they mach our argsSchema
                        if (tempInput == this.argsSchema[schemaIndex]['flag']) { //for each flag in argsSchema compares with the possible flag
                            let tempValue = arrInput[inputIndex + 1]; //if matches, gets the value and adds to our final array
                            arr.push(tempValue);
                        }
                    }
                }
            }
        }

        return arr
    }
}