let lista = [
  {id: 1, nome: 'Cristian', sobrenome: 'Pietro'},
  {id: 2, nome: 'Lionel', sobrenome: 'Messi'},
  {id: 3, nome: 'Cristian', sobrenome: 'Ronaldo'}
]

let pessoa = lista.find(function(item){
  return (item.sobrenome === 'Ronaldo') ? true : false
})

console.log(pessoa)