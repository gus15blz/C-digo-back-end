function soma1(numeros) {
    let soma = 0;
    for (let i = 0; i<numeros.length; i++){
        soma += numeros[i];
    }
    return soma;
}

const resultado = soma1([1,3,7])
console.log(resultado)
