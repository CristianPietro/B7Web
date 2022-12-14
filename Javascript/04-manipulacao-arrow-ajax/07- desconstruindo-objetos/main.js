let pessoa = {
  nome: 'Cristian',
  sobrenome: 'Pietro',
  idade: 26,
  social:{
    facebook: 'CristianPietro',
    instagram: {
      url: 'ccristianpietro',
      seguidore: 100,
    }
  },
  nomeCompleto: function (){
    return `${this.nome} ${this.sobrenome}`
  }
}

function pegarNomeCompleto({nome, sobrenome, social:{instagram:{url:instagram}}}){
  return `${nome} ${sobrenome} e me siga em ${instagram}`
}

console.log(pegarNomeCompleto(pessoa))