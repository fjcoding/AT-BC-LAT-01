export function squareDigits(num){

    let numeros = num.toString().split('');
    let suma = [];

    for (let index = 0; index < numeros.length; index++){
        suma[index] = parseInt(numeros[index]) * parseInt(numeros[index]);
    }

    suma = suma.join('');

    return parseInt(suma);
}


