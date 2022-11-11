let x = 19; // eslint-disable-line
x = 8843;

const y = 19;

let a = 100 as const; // eslint-disable-line

const pessoa = {
  nome: 'Matheus' as const,
  sobrenome: 'França',
};

export function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}
console.log(escolhaCor('Vermelho'));
console.log(pessoa);

//Module mode
export default 1;
