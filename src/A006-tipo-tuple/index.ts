//Tuple
const dadosCliente1: [number, string, string?] = [1, 'Matheus'];
//const dadosCliente1: readonly [number, string, string?] = [1, 'Matheus'];
const dadosCliente2: [number, string, string] = [1, 'Matheus', 'França'];

//ArrayTuple
const array1: readonly string[] = ['Matheus', 'França'];
const array2: ReadonlyArray<string> = ['Matheus', 'França'];

dadosCliente1[0] = 100;
dadosCliente1[1] = 'Outra pessoa';

dadosCliente1.pop();

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(array1);
console.log(array2);
