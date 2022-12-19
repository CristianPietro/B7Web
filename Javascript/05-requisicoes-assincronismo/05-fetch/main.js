function loadPosts(){

    document.getElementById('posts').innerHTML = `carregando...`;

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) =>{
       return response.json();
    })
    .then((json) =>{
        montarBlog(json)
    })
    .catch((err) =>{
        console.log('Problemas ' + err)
    })
}

function montarBlog(lista){
    let html = '';

    for(let i = 0; i < lista.length; i++){
        html += `<h3> ${lista[i].title} </h3>`;
        html += `${lista[i].body} <br>`
        html += `<hr>`
    }

    document.getElementById('posts').innerHTML = html;
}