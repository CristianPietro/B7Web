function resumo(usuario: {nome: string, idade?: number}){

    if(usuario.idade !== undefined){
    return `Olá ${usuario.nome}, tudo bem com você? Você tem ${usuario.idade} anos`;
    }else{
        return `Olá ${usuario.nome}, tudo bem?`;
    }
}

// implementação da função
let u = {
    nome: 'Pietro', 
    // idade: 27
};

console.log( resumo(u) );