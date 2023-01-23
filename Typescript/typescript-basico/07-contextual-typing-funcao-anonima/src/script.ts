let names = [ 'Pietro', 'Pedro', 'Carlos'];

names.forEach( function(nome){
    console.log(nome.toUpperCase())
} );

// O typescript verifica o contexto do codigo,e com base no contexto
// vai começar a determinar os types