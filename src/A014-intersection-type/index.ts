type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

type Pessoa = TemNome & TemSobrenome & TemIdade;

type AB = 'A' | 'B';
type AC = 'A' | 'C';

type Intersecao = AB & AC;
const conjunto: Intersecao = 'A';

const pessoa: Pessoa = {
  nome: 'Matheus',
  sobrenome: 'de França Cardoso',
  idade: 19,
};

console.log(pessoa);
console.log(conjunto);
