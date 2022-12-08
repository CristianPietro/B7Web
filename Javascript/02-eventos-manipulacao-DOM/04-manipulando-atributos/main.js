// funcao mostrar e ocultar senha

function click(){
  const input = document.querySelector('input');
  const button = document.querySelector('.btn');
  
  if(input.getAttribute('type') === 'text'){
    input.setAttribute('type', "password");
    button.innerText = 'Mostrar senha'
  } else {
    input.setAttribute('type', 'text');
    button.innerText = 'Ocultar senha'
  }

}