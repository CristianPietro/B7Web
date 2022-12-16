let cartao = '1234123412341234'

let lastDigitos = cartao.slice(-4)

let cartaoMascarado = lastDigitos.padStart(16, "*")

console.log(cartaoMascarado)

