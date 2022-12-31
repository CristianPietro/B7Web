// const response = fetch('https://jsonplaceholder.typicode.com/posts')
// .then(responseData => responseData.json())
// .then(jsonData => console.log(jsonData))
// .catch(e => console.log(e))

(async () => {
    try{
        const headers = {
            'content-type' : 'application/json',
            'TESTANDO' : 'TESTE'
        };

        const init = {
            method: 'DELETE',
            headers: headers,
            body: JSON.stringify({
                title: 'TESTANDO'
            })
        };

        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', init);

        const jsonData = await response.json();

        console.log(jsonData);
        // console.log(jsonData.title)

    }catch (e) {
        console.log('Deu erro '+ e)
    };
})();