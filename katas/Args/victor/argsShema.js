class ArgsShema {
    constructor(logFlag = '', logValue = false, portFlag = '', portValue = 0, pathFlag = '', pathValue = '') {
        this._logFlag = logFlag;
        this._logValue = logValue;
        this._portFlag = portFlag;
        this._portValue = portValue;
        this._pathFlag = pathFlag;
        this._pathValue = pathValue;
    }
    defaultMessage(){
        return `log Data ${this._portValue} ${this._pathValue}`;
    }    
}

export {ArgsShema};