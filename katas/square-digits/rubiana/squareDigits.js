export function squareDigits(num) {

    let final = "";
    let str = num.toString();

    for (var i = 0; i < str.length; i++) {
        let y = parseInt(str[i]);
        let z = y * y;
        z.toString();
        final = final + z;
    }

    let x = parseInt(final);
    return x;
}