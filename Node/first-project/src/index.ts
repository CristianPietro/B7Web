
import validator from 'validator';

let name = 'Cristian'; 

if(validator.isLowercase(name)){
    console.log(`A string ${name} é toda minúscula`)
}else{
    console.log(`A string ${name} NÃO é toda minúscula`)
}

