export function squareDigits(num) {
    const digits = num.toString().split('');
    const squaredDgts = digits.map((dgt) => dgt * dgt);
    const result = squaredDgts.join('');
    return parseInt(result);
}
