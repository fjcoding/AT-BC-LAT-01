export class Schema {
    argsSchema = {
        l : {
            defaultValue: false,
            valueType: 'boolean'
        },
        p : {
            defaultValue: 0,
            valueType: 'number'
        },
        d : {
            defaultValue: '',
            valueType: 'string'
        },
        h : {
            defaultValue: false,
            valueType: 'boolean'
        }
    }
    giveSchema() {
        return this.argsSchema;
    }
}

/*function flagCreation(input) {
    let inputArray = input.split('');
    let counter = 0;
    let listNumber = [];
    for (let index = 0; index < inputArray.length; index++) {
        if (inputArray[index] == '-') {
            listNumber[counter] = index;
            counter++;
        }
    }
}*/
