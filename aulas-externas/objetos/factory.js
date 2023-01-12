function createMicrofone(color = 'black'){
let isOn = true;

function toggleOnOff() {
    if(isOn){
        console.log('desligar')
    }else{
        console.log('ligar')
    }
    isOn = !isOn;
}

return{ color, toggleOnOff}

};

const microfoneBlack = createMicrofone();
// const microfoneWhite = createMicrofone('white');
// console.log(microfoneBlack.color);
// console.log(microfoneWhite.color);
// console.log(microfoneBlack)


function criarCelular(marcaDoCelular, tamanhoDaTela, capacidadeDeBateria){
    return{
        marcaDoCelular,
        tamanhoDaTela,
        capacidadeDeBateria,
        ligar(){
            console.log('fazendo ligação...')
        }
    }
}

const celular1= criarCelular('iphone', 5.5, 5000)
console.log(celular1)

