//-l -p 8080 -d /usr/logs
//-l (logging=boolean)  -p (port=number)  -d (directory=string)

export class schemaClass {
    constructor() {
        this.flagsSchema = [{
            flag: 'l',
            name: 'logging',
            type: Boolean,
            defaultValue: false
        },
        {
            flag: 'p',
            name: 'port',
            type: Number,
            defaultValue: 0,
        },
        {
            flag: 'd',
            name: 'directory',
            type: String,
            defaultValue: ''
        }
        ];
    }

    splitInputStr(inputStr) {
        let arrInput = inputStr.split(' ');
        return arrInput;
    }

    isFlag(str) {
        if (str.substring(0, 1) == '-' && isNaN(str.substring(1, 2))) {
            return true;
        } else {
            return false;
        }
    }

    validFlag(flag) {
        if (this.flagIndex(flag) > -1) {
            return true;
        } else {
            return 'Invalid! The Flag does not exist.';
        }
    }

    flagIndex(flag) {
        var flagIndex;

        this.flagsSchema.forEach(flags => {
            if (flags['flag'] == flag) {
                flagIndex = this.flagsSchema.indexOf(flags);
            }
        });

        return flagIndex;
    }

    defaultValue(flag) {
        let defaultValue = this.flagsSchema[this.flagIndex(flag)]['defaultValue'];
        return defaultValue;
    }

    setNewFlag(_flag, _name, _type, _defaultValue) {
        let tempObj = {
            flag: _flag,
            name: _name,
            type: _type,
            defaultValue: _defaultValue
        };

        if (this.checkInput(tempObj)) {
            this.flagsSchema.push(tempObj);
            return 'New Flag "' + _flag + '" added to the Schema';
        } else {
            return 'Missing parameters.';
        }
    }

    checkInput(input) {
        if (input.defaultValue !== undefined) {
            return true;
        } else {
            return false;
        }
    }

    displaySchema() {
        return this.flagsSchema;
    }
}

export class parserClass extends schemaClass {

    output(str) {
        let inputArr = this.splitInputStr(str);
        let finalStr = '';

        for (let index = 0; index < inputArr.length; index++) {
            let input = inputArr[index];
            let flag = input.substring(1, 2);

            if (this.isFlag(input) && this.validFlag(flag) === true) {

                if (!this.isFlag(inputArr[index + 1])) {
                    finalStr += 'Flag: ' + input + ' Value: ' + inputArr[index + 1] + ' ';

                } else if (this.isFlag(inputArr[index + 1]) || index + 1 == inputArr.length) {
                    finalStr += 'Flag: ' + input + ' Value: ' + this.flagsSchema[this.flagIndex(flag)]['defaultValue'] + ' ';
                }

            } else if (this.isFlag(input)) {
                finalStr += input + ' is not a valid flag ';
            }
        }

        return finalStr;
    }
}