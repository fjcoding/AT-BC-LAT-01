export function squareDigits(num) {
    // The number is parsed to string in order to iterate each digit and square it
    // The result is a concatenation of the squared numbers
    const numStr = num.toString();
    let result = '';

    for (let index = 0; index < numStr.length; index++) {
        result = result + (Math.pow(parseInt(numStr[index]), 2)).toString();
    }

    return parseInt(result);
}