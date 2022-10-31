function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Matheus',
  sobrenome: 'de França Cardoso',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Matheus', 'de França Cardoso');

pessoa.exibirNome();

export { pessoa };
