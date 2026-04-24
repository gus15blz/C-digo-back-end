function contarVogais(texto) {
  let contador = 0;
  let vogais = "aeiouAEIOU";
  for (let i = 0; i < texto.length; i++) {
    if (vogais.includes(texto[i])) {
      contador++;
    }
  }
  return contador;
}
console.log(contarVogais("JavaScript")); //por isso vc ainda é prata no rankeado professor
