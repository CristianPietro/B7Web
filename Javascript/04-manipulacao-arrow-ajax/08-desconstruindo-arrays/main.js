let info = ['Cristian Pietro', 'Cristian', 'Pietro', '@ccristianpietro'];

let [ nomeCompleto] = info;

console.log(nomeCompleto)

function criar(){
  return [1, 2, 3]
}

let [a, b, c] = criar();
console.log(a, b, c)