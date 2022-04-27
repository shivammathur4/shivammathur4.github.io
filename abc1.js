function searchShow(a) {
    //a = "kendra"
    const url = 'https://vqtv2m1x1h.execute-api.ap-southeast-1.amazonaws.com/default/query?query=' + a;
    const abc = fetch(url)
    .then(response => response.json())
    .then((data) => {

        document.querySelector('#b').innerText = data.DocumentExcerpt.Text;
        document.querySelector('#e').innerText = data.DocumentURI;
        document.querySelector('#e').href = data.DocumentURI;

    })
    .catch(error => {
        document.querySelector('#d').innerText = data.Type;    
    });
}

//document.querySelector('#b').innerText = jsonData.DocumentExcerpt.Text
//document.querySelector('#e').innerText = jsonData.DocumentURI

//document.getElementById('app').innerHTML = `
//<h1> query  (${abc.length} results) </h1>
//`


/*window.onload = () => {
    const searchFieldElement = document.getElementById("searchField");
    searchFieldElement.onkeyup = (event) => {
        searchShow(searchFieldElement.value);
    };
}*/

/*window.onclick = () => {
    const searchFieldElement = document.getElementById("searchField");
    searchFieldElement.onclick = (event) => {
        searchShow(searchFieldElement.value);
    };
}*/

