/* eslint-disable */
let nome: string = 'Matheus'; //Qualquer tipo de string '' , "" , ``
let idade: number = 19; // 10 , 1.57 , -5.55 , 0xf00d
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays

let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b', 'c'];
let arrayDeStrings2: string[] = ['a', 'b', 'c'];

// Objetos
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: 'Matheus',
  idade: 19,
};

console.log(pessoa.nome);

function soma(x: number, y: number) {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
console.log(soma(3, 6));
