function Microfone(color = 'black'){
    this.color = color;
    this.isOn = true
}

Microfone.prototype.toggleOnOff = () => {
    if(this.isOn){
        console.log('desligar')
    }else{
        console.log('ligar')
    }
    this.isOn = !this.isOn;
}


// const microfone = new Microfone();
// const microfone2 = new Microfone('white');
// console.log(microfone);
// console.log(microfone2);

const meuObjeto = {
    a: 1,
    b: 2,
}

const novoObjeto = Object.create(meuObjeto);

novoObjeto.novaPropriedade = 5
console.log(meuObjeto.hasOwnProperty('map'))



//Meu objeto.__ptoro__ -> object.prototype -> null

const meuArray = [1, 2, 3, 'a', 'b']

//meuArray.__proto__ -> array.prototypec -> object.prototype - null

function minhaFuncao(){
    return 1 * 2
}

//minhaFuncao.__proto__ -> function.prototype -> object.prototype -> null