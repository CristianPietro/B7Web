function Celular(marcaDoCelular, tamanhoTela, capacidadeDeBateria){
    this.marcaDoCelular = marcaDoCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeDeBateria = capacidadeDeBateria,
    this.ligar = function(){
        console.log('fazendo ligação...')
    }
}

const celular = new Celular('asus', 5.5, 5000);
console.log(celular)

function Microfone(cor = 'black', modelo, marca){
    this.cor = cor,
    this.modelo = modelo,
    this.marca = marca,
    this.ligado = true,
    this.LigadoOuDelsigado = function (){
        if(this.ligado === true){
            console.log('Funcionando')
        }
    }
}

const microfone = new Microfone('purple', 'A520', 'Redragon')
console.log(microfone)