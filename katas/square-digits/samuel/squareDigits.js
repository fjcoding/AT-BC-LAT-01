export function squareDigits(num) {
    let numero = num.toString();
    let res
    let suma = '';
    if (num == 0) {
        return 0;
    }
    else {
        numero.split('').forEach(c => {
            res = Math.pow(parseInt(c),2);
            suma += res.toString();
        });
    }
    

    return parseInt(suma);
}