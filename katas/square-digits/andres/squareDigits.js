export function squareDigits(num) {
    var inputString = String(num);
    var resultString = '';    
    for (var index = 0; index < inputString.length; index++) {
        var digit = Number(inputString[index]);
        digit *= digit;
        resultString = resultString + String(digit);
    }
    return Number(resultString);
}