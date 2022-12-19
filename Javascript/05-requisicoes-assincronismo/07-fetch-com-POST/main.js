async function inserirPost(){
    document.querySelector("#posts").innerHTML = 'Carregando...'

    let req = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'titulo de teste',
            body: 'corpo de teste',
            userId: 4,
        }),
        headers: {
            'content-type': 'application/json',
        }

    })
    let json = await req.json();
    console.log(json)

}