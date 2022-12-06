
let personagem = {
  nome: 'Zoro',
  idade: 24,
  país: 'Japão',

  armas: ['Katana1', 'Katana2', 'Katana3'],

  caracteristicas:{
    forca: 20,
    magia: 5,
    elemento: 'fogo'
  }
}

personagem.nome = "Luffy";
personagem.idade = 20;
personagem.caracteristicas.elemento = "Borracha";


// console.log(`${personagem.nome} tem ${personagem.idade} anos`)
// console.log(`Elemento: ${personagem.caracteristicas.elemento}`)
// console.log(`Armas: ${personagem.armas}`)

let piloto = {
  nome: 'Pietro',
  idade: 26,
  carros: [
    {modelo: 'fiat', cor: 'preto'},
    {modelo: 'Ford', cor: 'branco'}
  ]
}

// console.log(piloto.carros[1].modelo)

let pessoa = {
   nome: 'Cristian',
   sobrenome: 'Pietro',
   idade: 26,
   nomeCompleto: function () {
    return `${this.nome} ${this.sobrenome}`
   }
}

console.log(pessoa.nomeCompleto())