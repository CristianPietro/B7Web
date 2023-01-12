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
console.log(microfoneBlack)