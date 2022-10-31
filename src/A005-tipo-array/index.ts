// Array <T>  -- T[]

export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + ' - ' + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

console.log(multiplicaArgs(1, 2, 3));
console.log(concatenaString('a', 'b', 'c', 'd'));
console.log(toUpperCase('a', 'b', 'c', 'd'));
