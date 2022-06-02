# Promises
Curso Tera - Processos assíncronos com promises, Ajax, Assync e Await.
_____

PROCESSOS ASSÍNCRONOS COM PROMISES:

Imagine que exista um "produtor" que faz algo e leva tempo para devolver o resultado - por exemplo, algum código que carrega os dados em uma rede. E do outro lado existe um "consumidor" que deseja o resultado do "produtor" assim que estiver pronto. Muitas funções podem precisar desse resultado. 

A função passada para o new Promise é chamada executor.
Seus argumentos resolve e reject, são callbacks fornecidos pelo próprio JavaScript. Nosso código está apenas dentro do executor.

let promise = new Promise(function(resolve, reject) {
  // código executor (que retornará o resolve ou o reject)
});

_____

resolve(value) - se o trabalho for concluído com sucesso, com o resultado value.
reject(error) - se ocorreu um erro. error é o objeto do erro.

Um objeto Promise serve como um link entre o executor e as funções de consumo, que receberão o resultado ou o erro. Neste caso, funções de consumo podem ser "registradas" (subscribed) com os métodos .then, .catch e .finally.

_____

Then: Sempre é chamado, independente da promise resolvida, ou rejeitada.

promise.then(
  function(result) { /* lida com o resultado */ },
  function(error) { /* lida com o erro */ }
);

Exemplo de código em que a promise será resolvida:

const promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

promise.then(
  result => alert(result), // mostra "done!" depois de 1 segundo
  error => alert(error) // não executa
);

Exemplo de código em que a promise será rejeitada:

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

promise.then(
  result => alert(result), // não executa
  error => alert(error) // mostra "Error: Whoops!" depois de 1 segundo
);

const promise = new Promise(resolve => {
  setTimeout(() => resolve("done!"), 1000);
});

promise.then(alert);
);

_____

Catch: Se a função foi bem resolvida o catch não será acionado. Só será acionado em caso de erros. Obs.: O then já faz isso mas se desejamos apenas obter erros, podemos usar null como o primeiro argumento: .then(null, errorHandlingFunction). Ou podemos usar .catch(errorHandlingFunction), que é exatamente o mesmo argumento.

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// .catch(f) is the same as promise.then(null, f)
promise.catch(alert); // mostra "Error: Whoops!" depois de 1 segundo

_____

Finally: função que é sempre chamada, resolvido ou não. É usado para encerrar conexões. O utilizamos para realizar procedimentos de finalização,  .finally passa resultados e erros para o próximo handler. Auxilia em outras ações que não tem a ver com o resultado da promise, mas sim com a sua finalização.

new Promise((resolve, reject) => {
  setTimeout(() => resolve("result"), 2000)
})
  .finally(() => alert("Promise ready")) // Executa
 .then(result => alert(result)); // Executa

new Promise((resolve, reject) => {
  throw new Error("error");
})
  .finally(() => alert("Promise ready")) // Executa
  .catch(err => alert(err));  // Executa

_____

Ajax (Asynchronous Javascript And Xml):

O Ajax usa o objeto XMLHttpRequest (XHR) interno do navegador para enviar e receber informações de e para um servidor web de forma assíncrona, mas em segundo plano, sem bloquear a página ou interferir na experiência da pessoa usuária. 

XMLHttpRequest (XHR) é um objeto que é usado na interação com servidores para receber dados de uma URL sem ter que atualizar de novo a página (requisição assíncrona).

// 1. Criando XMLHttpRequest
const xhr = new XMLHttpRequest();

/* 2. Inicialize o `XMLHttpRequest
method – Método HTPP (string)
URL – URL do recurso (string ou objeto)
async – Especifica se a requisição é síncrona (booleano) [opcional]
user, password – login e senha para autenticação básica [opcional] 
*/
xhr.open(method, URL, [async, user, password])

/* 3. Envie a requisição
body é opcional e contém dados que serão enviados junto com a requisição
*/
xhr.send([body])

/* 4. Escute os "eventos" de resposta. Os três eventos principais de resposta são:
load – a requisição já foi concluída, independente se há erros ou não
error – houve um erro na requisição e ela não pode ser enviada (falha de conexão ou URL inválida, por exemplo)
progress – disparado periodicamente enquanto a resposta está sendo obtida; retorna quanto da resposta já foi obtida
*/
xhr.onload = function() {
  alert(`Loaded: ${xhr.status} ${xhr.response}`);
};

xhr.onerror = function() { 
  alert(`Network Error`);
};

xhr.onprogress = function(event) {
   /* Propriedades de event
event.loaded - Quanto já foi baixado
event.lengthComputable - É igual a true se o servidor possuir o header Content-Length
event.total - Total de bytes (se event.lengthComputable for verdadeiro)
  */
  alert(`Received ${event.loaded} of ${event.total}`);
};