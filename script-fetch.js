// Exemplo: const promise = fetch(url, options); // recebe 2 parâmetros: a URL e as opções da requisição (não é obrigatório)

// O resultado dessa requisição é feita em 2 passos:
// 1ª etapa: PROMISE (que basicamente retorna o statuscode)
// 2ª etapa: RESULTADO (aí vc escolhe o formato)

// 1ª etapa: PROMISE
// Como o resultado do FETCH é uma PROMISE, vamos usar o THEN para carregar o resultado:
function loadMovies(directorName){
    fetch(`https://ghibliapi.herokuapp.com/films?director=${directorName}`)
        .then((response) => response.json()) // THEN para trazer a resposta
        .then(data => { // THEN para trazer o resultado final (data)
            console.log(data);
        }); 
}

// loadMovies("Hayao Miyazaki"); // chamando a função passando o nome do diretor para a consulta