enum Cores {
  VERMELHO = 1, //0
  AZUL = 2, //1
  AMARELO = 3, //2
}

function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

console.log(Cores);
console.log(Cores.VERMELHO);
console.log(Cores[0]);
console.log(Cores[1]);

escolhaCor(Cores.AMARELO);
