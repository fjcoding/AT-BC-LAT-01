//-l -p 8080 -d /usr/logs
//-l (logging=boolean)  -p (port=number)  -d (directory=string)

export class argsClass {

    checkInput(input) {
        let arrInput = input.split(" ");

        for (let inputs in arrInput) {
            if (inputs.substring(0, 1) == '-' && NaN(inputs.substring(1, 1))) {
                var indexFlag = arrInput.indexOf(inputs);
                var indexArg = indexFlag + 1;
            }
        }

    }

    constructor(arrInput) {
        this.flag = arrInput[indexFlag];
        this.atribute = arrInput[indexArg];
    }
}