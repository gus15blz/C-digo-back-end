function removerDuplicados(array) {
  let resultado = [];
  for (let i = 0; i < array.length; i++) {
    if (!resultado.includes(array[i])) {
      resultado.push(array[i]);
    }
  }
  return resultado;
}
console.log(removerDuplicados([1, 2, 2, 3, 4, 4, 5]));//passa c# na proxima 
