function pegarTemperatura() {
  return new Promise(function (resolve, reject) {
    console.log("Pegando temperatura...");

    setTimeout(() => {
      resolve("40 na sombra");
    }, 2000);
  });
}

let temp = pegarTemperatura();
temp.then(function (resultado) {
  console.log(`TEMPERATURA: ${resultado}`);
});

temp.catch(function (error){
    console.log('Deu erro aqui')
})