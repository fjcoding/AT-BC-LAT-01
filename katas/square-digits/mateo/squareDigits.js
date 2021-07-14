export function squareDigits(num) {

    let numbers = num.toString().split('');
    let res = [];

    for (let index = 0; index < numbers.length; index++) {
        res[index] = parseInt(numbers[index]) * parseInt(numbers[index]);
    }

    res = res.join('');

    return parseInt(res);
}