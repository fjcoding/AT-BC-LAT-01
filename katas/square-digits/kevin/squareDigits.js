export function squareDigits(num) {
    num = num.toString();
    let squareDigits = num.split("");
    let result = "";
    squareDigits.forEach(element => {
        element = Math.pow(element, 2);
        result = result + "" + element;
    })
    result = Number(result);
    return result;
}