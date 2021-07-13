export function squareDigits(num) {

    let numeros = num.toString().split('');
    let suma = [];


    for (let i = 0; i < numeros.length; i++){
        suma[i] = parseInt(numeros[i]) * parseInt(numeros[i]);
    }

    suma = suma.join();

    for (let i = 0; i < suma.length; i++){
        suma = suma.replace(',', '');
    }

    return parseInt(suma);
}


