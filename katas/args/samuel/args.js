class Parser {

}

export class Schema {
    argsSchema = {
        l : {
            value: true,
            valueType: 'boolean'
        },
        p : {
            value: 0,
            valueType: 'number'
        },
        d : {
            value: '',
            valueType: 'string'
        },
        h : {
            value: true,
            valueType: 'boolean'
        }
    }
    giveSchema() {
        return this.argsSchema;
    }
}

/*function flagCreation(input) {
    let inputArray = input.split('');
    let beggining = 0;
    let end = 0;
    let counter = 0;
    let listNumber = [];
    for (let index = 0; index < inputArray.length; index++) {
        if (inputArray[index] == '-') {
            listNumber[counter] = index;
            counter++;
        }
    }
}*/
