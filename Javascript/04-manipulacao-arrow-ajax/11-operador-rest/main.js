function adcionar(nomes, ...novosNomes){

    let novoConjunto = {
        ...nomes,
        ...novosNomes
    };

    return novoConjunto
}

let nomes = ['Pietro', 'Cristian', 'Messi', 'Neymar']
let outros = adcionar(nomes, 'Pedro', 'maria', 'João')

console.log(outros)