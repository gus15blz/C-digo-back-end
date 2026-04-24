function somarPositivos(array) {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      soma += array[i];
    }
  }
  return soma;
}
console.log(somarPositivos([1, -2, 3, 4, -5])); //sabia que agnt ta no terceiro né??????
