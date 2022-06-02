const xhr = XMLHttpRequest(); // criado o objeto XHR

// Agora podemos fazer requisições:

// Como? Com o método OPEN!
// OEN contém 3 parâmetros:
// 1: método HTTP (GET, POST, DELETE, ETC.)
// 2: URL
// 3: Definir se é assync ou sync (boolean e opcional, pois normalmente são assync) - (não precisa colocar, por padrão é true)
xhr.open('GET', 'url'); 

// por último, para obter o resultado da requisição use o SEND
xhr.send();

// Agora vem os status para sabermos o que está acontecendo com a nossa requisição. Métodos:
// onprogress: para saber o progresso (exemplo: quantos por cento de um upload já foi realizado);
// onload: para saber quando foi carregado ou concluído;
// onerror: para saber se deu algum erro.

// onprogress:
xhr.onprogress = function (event){    
    alert(`Recebido (onprogress): ${event.loaded} of ${event.total}`);
}

// onload:
xhr.onload = function () {
    alert(`Carregado: ${xhr.status} ${xhr.response}`);
}

// onerror:
xhr.onerror = function () {
    alert(`Ops! Existe um erro aqui!`);
}

// Curiosidade: as requisições podem ser abortadas abort(). Esse método cancela, por exemplo, um requisição que esteja sendo executada.