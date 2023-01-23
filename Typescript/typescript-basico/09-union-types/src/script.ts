let idade: number | string= 90;

idade = '25';

function mostrarIdade(idade: number | string){
    console.log('Minhad idade é '+ idade);
}

mostrarIdade(27);
mostrarIdade('27');