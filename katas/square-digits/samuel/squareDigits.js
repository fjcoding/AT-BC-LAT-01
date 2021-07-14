export function squareDigits(num) {
    let number = num.toString();
    let result
    let sum = '';
    if (num == 0) {
        return 0;
    } else {
        number.split('').forEach(c => {
            result = Math.pow(parseInt(c), 2);
            sum += result.toString();
        });
    }
    return parseInt(sum);
}