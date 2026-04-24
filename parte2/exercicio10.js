function contarPalavras(frase) {
  let palavras = frase.trim().split(" ");
  return palavras.length;
}
console.log(contarPalavras("se o Henrique não sabe oque é um pr ele é beta")); //chega disso pelo amor de Deus
