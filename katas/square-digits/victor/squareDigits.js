export function squareDigits(num) {
    let strNum = num.toString();
    let result = 0;
    for (let index = 0; index < strNum.length; index++) {
        let squareNum = parseInt(strNum[index]) * parseInt(strNum[index]);
        result = result + String(squareNum);
    }
    return parseInt(result);
}
