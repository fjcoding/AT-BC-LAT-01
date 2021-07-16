//-l -p 8080 -d /usr/logs
//-l (logging=boolean)  -p (port=number)  -d (directory=string)

export class schemaClass {
    constructor() {
        this.flagsSchema = [{
                flag: "l",
                name: "logging",
                type: Boolean,
                defaultValue: false,
                parameter: false,
            },
            {
                flag: "p",
                name: "port",
                type: Number,
                defaultValue: 0,
                parameter: true,
            },
            {
                flag: "d",
                name: "directory",
                type: String,
                defaultValue: "",
                parameter: true,
            }
        ];
    }

    splitInputStr(inputStr) {
        let arrInput = inputStr.split(" ");
        return arrInput;
    }

    validFlag(flag) {
        if (this.flagIndex(flag) > -1) {
            return true
        } else {
            return 'Invalid! The Flag does not exist.'
        }
    }

    flagIndex(flag) {
        var flagIndex;

        this.flagsSchema.forEach(flags => {
            if (flags['flag'] == flag) {
                flagIndex = this.flagsSchema.indexOf(flags);
            }
        });

        return flagIndex
    }

    defaultValue(flag) {
        let defaultValue = this.flagsSchema[this.flagIndex(flag)]['defaultValue'];
        return defaultValue
    }

    setNewFlag(_flag, _name, _type, _defaultValue, _parameter) {
        let tempArr = {
            flag: _flag,
            name: _name,
            type: _type,
            defaultValue: _defaultValue,
            parameter: _parameter
        };

        if (this.flagsSchema.push(tempArr)) {
            return "New Flag added to the Schema"
        }
    }

    displaySchema() {
        for (i = 0; i < this.flagsSchema.length; i++) {
            document.writeln(this.flagsSchema[i]);
        }

    }
}