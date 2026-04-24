function inverterArray(array) {
  let resultado = [];
  for (let i = array.length - 1; i >= 0; i--) {
    resultado.push(array[i]);
  }
  return resultado;
}
console.log(inverterArray([1, 2, 3, 4])); // vc ainda é beta Herique
