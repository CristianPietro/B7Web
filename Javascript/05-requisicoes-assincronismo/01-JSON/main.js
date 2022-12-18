// JSON


// let pessoa = {
//    nome: 'Pietro',
//    idade: 27,
//    estetica:{
//     altura: 1.78,
//     peso: 89
//    }
// }
// console.log(pessoa.estetica.altura)



//JSON.parse()

// let humano = JSON.parse('{"nome":"Cristian Pietro", "idade":27}')
// console.log(humano.nome)



//JSON.stringify()

let cristian = {nome: 'Pietro', idade: 27, algo: null}
let pessoaString = JSON.stringify(cristian)
console.log(pessoaString)

let busca = {input: 'bon'}
let buscaString = JSON.stringify(busca)
console.log(buscaString)

let resultado = {
    lista: [
        'cristian',
        'Cristian Pietro',
        'Osório'
    ]
}

let resultadoString = JSON.stringify(resultado)
console.log(typeof resultadoString)

let parseResultado = '{"lista":["cristian","Cristian Pietro","Osório"]}'
let resultadoParse = JSON.parse(parseResultado)
console.log(typeof resultadoParse)
