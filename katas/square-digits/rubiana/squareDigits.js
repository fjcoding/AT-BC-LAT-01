export function squareDigits(num) {
    let result = "";
    let str = num.toString();

    for (var index = 0; index < str.length; index++) {
        let tempNum = parseInt(str[index]);
        let tempResult = tempNum * tempNum;
        tempResult.toString();
        result += tempResult;
    }

    let finalResult = parseInt(result);
    return finalResult;
}