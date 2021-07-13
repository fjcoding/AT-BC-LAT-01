export function squareDigits(num) {
    // The number is parsed to string in order to iterate each digit and square it
    // The result is a concatenation of the squared numbers
    const num_str = num.toString();
    let result = "";

    for (let i=0; i < num_str.length; i++){
        result = result + (Math.pow(parseInt(num_str[i]),2)).toString();
    }
    
    return parseInt(result);
}