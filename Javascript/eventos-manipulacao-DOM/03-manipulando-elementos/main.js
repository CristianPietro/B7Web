function clicou(){
  const ul = teste.querySelector('ul')
    
  let newLi = document.createElement('li')
  newLi.innerText = "item adcionado"
  
  ul.appendChild(newLi)

}
