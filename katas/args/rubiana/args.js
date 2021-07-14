//-l -p 8080 -d /usr/logs
//-l (logging=boolean)  -p (port=number)  -d (directory=string)

export class argsClass {
    checkInputType(input) {
        let arrInput = input.split(" ");

        if (arrInput[0] == '-l') {
            var bool = true;

            if (arrInput[1] == '-p' && !isNaN(arrInput[2])) {
                var num = parseInt(arrInput[2]);
            } else {
                return "Flag -p is missing or the parameter isn't an number"
            }

            if (arrInput[3] == '-d' && typeof arrInput[4] === 'string') {
                var dirct = arrInput[4];
            } else {
                return "Flag -d is missing or the parameter isn't a string"
            }

        } else {
            var bool = false;

            if (arrInput[0] == '-p' && !isNaN(arrInput[1])) {
                var num = parseInt(arrInput[1]);
            } else {
                return "Flag -p is missing or the parameter isn't an number"
            }

            if (arrInput[2] == '-d' && typeof arrInput[3] === 'string') {
                var dirct = arrInput[3];
            } else {
                return "Flag -d is missing or the parameter isn't a string"
            }
        }

        let arrFinal = [bool, num, dirct]
        return arrFinal
    }


    constructor(arrInput) {
        this.bool = arrInput[1];
    }

}