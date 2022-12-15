// let info = {
//   nome: 'Cristian',
//   sobrenome: 'Pietro',
//   idade: 26
// };

// let novaInfo = {
//   ...info,
//   cidade: 'Osório',
//   estado: 'Rio Grande do Sul',
//   pais: 'Brasil'
// }

function adcionarInfo(info){

  let novasInfo = {
    ...info,
    status: 0,
    token: 'triHard',
    data_cadastro: "12/12/12"
  };
  return novasInfo
}

console.log(adcionarInfo({nome:'Cristian', sobrenome:'Lacerda'}))