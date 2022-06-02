// Vamos fazer uma chamada para uma API real usando XHR

function loadMovies(directorName){
    const xhr = new XMLHttpRequest(); // crio o XHR
    xhr.open('GET', `https://ghibliapi.herokuapp.com/films?director=${directorName}`); // determino o method, a URL e que é assync (não precisa declarar)
    xhr.responseType = "json";
    xhr.send(); // envio a requisição

    // onload para pegar o resultado assim que estiver carregado
    xhr.onload = function () {
        console.log(xhr.response); // log da resposta
    }
}

// loadMovies("Hayao Miyazaki"); // chamando a função passando o nome do diretor para a consulta

