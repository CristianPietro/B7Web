function alterar(titulo){
  document.getElementById('titulo').innerHTML = titulo;
  document.getElementById('campo').value = 'O campo foi alterado'
}

function soma(x, y){
  let total =  x + y;
  return total
}

alterar('titulo de exemplo')