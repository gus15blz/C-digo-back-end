function segundoMaior(numeros) {
  let maior = -Infinity;
  let segundo = -Infinity;
  for (let i = 0; i < numeros.length; i++) {
    let n = numeros[i];
    if (n > maior) {
      segundo = maior;
      maior = n;
    } else if (n > segundo && n !== maior) {
      segundo = n;
    }
  }
  return segundo;//esse você me fez pensar em...
}
console.log(segundoMaior([10, 5, 20, 8, 15000]));// não gostei de pensar
