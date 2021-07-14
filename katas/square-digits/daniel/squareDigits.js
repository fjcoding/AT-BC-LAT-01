export function squareDigits(num) {
    // The number is parsed to string in order to iterate each digit and square it
    // The result is a concatenation of the squared numbers
    const num_str = num.toString();
    let result = "";

    for (let index = 0; index < num_str.length; index++) {
        result = result + (Math.pow(parseInt(num_str[index]), 2)).toString();
    }
    
    return parseInt(result);
}