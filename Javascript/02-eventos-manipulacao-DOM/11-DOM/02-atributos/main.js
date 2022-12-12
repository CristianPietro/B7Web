function trocarDiv(fileDiv, modoLuffy){
  document.querySelector('.imagem').setAttribute('src', 'img/'+fileDiv)

  document.querySelector('.imagem').setAttribute('data-luffy', modoLuffy)
}

function escolherLuffy(){
  let luffy = document.querySelector('.imagem').getAttribute('data-luffy')
  alert(luffy)
}