function numerosPrimos(n) {
  let primos = [];
  for (let i = 2; i <= n; i++) {
    let ehPrimo = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        ehPrimo = false;
        break;
      }
    }
    if (ehPrimo) {
      primos.push(i);
    }
  }
 return primos;
}
console.log(numerosPrimos(10)); // connfesso que pedi ajuda pra ia
