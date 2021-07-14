export function squareDigits(num) {
    var inputString = String(num);
    var resultString = "";    
    for (var index = 0; index < inputString.length; index++) {
        var valor = Number(inputString[index]);
        valor *= valor;
        resultString = resultString + String(valor);
    }
    return Number(resultString);
}