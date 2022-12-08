const input = document.querySelector('input')
const lista = document.querySelector('ul')

function handleKeyUp(e){
  if(e.key === 'Enter'){

    const newLi = document.createElement('li');
    newLi.innerHTML = input.value;
    lista.appendChild(newLi)
    input.value = ' ';
  } 

}

input.addEventListener('keyup', handleKeyUp)


// pegar o input e o lista (ul)
// criar um novo elemento
// introduzir um html no novo elemento
// colocar o conteudo no novo elemento
// inserir o novo elemento na lista
// resetar o campo de entrada

