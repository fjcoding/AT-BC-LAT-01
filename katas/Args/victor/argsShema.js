class ArgsShema {
  constructor(logFlag = '', logValue = false, porthFlag = '', portValue = 0, pathFlag = '', pathValue = '') {
    this._logFlag = logFlag;
    this._logValue = logValue;
    this._porthFlag = porthFlag;
    this._portValue = portValue;
    this._pathFlag = pathFlag;
    this._pathValue = pathValue;
  }
    defaultMessage(){
      return `log data ${this._portValue} ${this._pathValue}`;
    }

    
}

export {ArgsShema};