// criação de promessa

const myPromise = new Promise((resolve, reject) =>{
    const nome = 'Pietro'

    if (nome === 'Pietro') {
        resolve('Pietro foi encontrado')
    } else {
        reject('o usúrio Pietro não foi encontrado')
    }
})

// myPromise.then((data) =>{
//     console.log(data)
// })



// Encadeamento de then's

const myPromise2 = new Promise((resolve, reject) =>{
    const nome = 'Pietro'

    if (nome === 'Pietro') {
        resolve('Pietro foi encontrado')
    } else {
        reject('o usúrio Pietro não foi encontrado')
    }
})

// myPromise2.then((data) =>{
//     return data.toUpperCase()
// }).then((stringModificada) =>{
//     console.log(stringModificada)
// })



// Retorno de catch

const myPromise3 = new Promise((resolve, reject) =>{
    const nome = 'Pietro'

    if (nome === 'Pietro') {
        resolve('Pietro foi encontrado')
    } else {
        reject('o usúario Pietro não foi encontrado')
    }
})

// myPromise3.then((data) =>{
//     console.log(data)
// }).catch((err) =>{
//     console.log('Aconteceu um erro ' + err )
// })



// Resolver várias promessas

const p1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('P1 ok! Timeout')
    }, 2000);
})

const p2 = new Promise((resolve, reject) =>{
    resolve('P2 ok!')
})

const p3 = new Promise((resolve, reject) =>{
    resolve('P3 ok!')
})

// const resolveAll = Promise.all([p1, p2, p3]).then((data) =>{
//     console.log(data)
// })



//Varias promessas com race

const p4 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('P4 ok! Timeout')
    }, 2000);
})

const p5 = new Promise((resolve, reject) =>{
    resolve('P5 ok!')
})

const p6 = new Promise((resolve, reject) =>{
    resolve('P6 ok!')
})

// const resolveAllRace = Promise.race([p4, p5, p6]).then((data) =>{
//     console.log(data)
// })



// fetch request na API no github

// const userName = "CristianPietro"
// fetch(`https://api.github.com/users/${userName}`,{ 
//     method: 'GET',
//     headers:{
//         Accept: 'application/vnd.github.v3+json',
//     },
// })
// .then((response) =>{
//     console.log(typeof response)
//     console.log(response)
//     return response.json()
// })
// .then((data) =>{
//     console.log(`O nome do usuario é ${data.name}`)
// })
// .catch((err) =>{
//     console.log(`Houve algum erro ${err}`)
// })

///

const MaiorDeIdade = new Promise((resolve, reject) =>{
    const pessoa = 16;
    if(pessoa >= 18){
        resolve('é maior de idade')
    }else{
        reject('é menor de idade')
    }
})

MaiorDeIdade
.then((info) =>{
    console.log(`Pode entrar na festa: ${info}`)
})
.catch((err) =>{
    console.log(`Proibida a entrada: ${err}`)
})
