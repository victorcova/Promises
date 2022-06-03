// Utilize a api Stranger Things Quotes disponível em https://github.com/shadowoff09/strangerthings-quotes para retornar frases aleatórias da série. 
// Para isso, crie uma função assíncrona que consuma a API utilizando fetch.
// Teste seu código chamando a função e mostrando um alerta com a frase entre aspas seguida do autor. 
// Exemplo: "I don’t care if anyone believes me." - Joyce Byers. 

async function quotesStrangeThings(numQuotes){    
    try{        
        const response = await fetch (`https://strangerthings-quotes.vercel.app/api/quotes/${numQuotes}`);
        const data = await response.json();

        const quotes = data.map(function (quoteAuthor) {
            const parte1 = quoteAuthor.quote;
            const parte2 = quoteAuthor.author;
            return `${parte1} - ${parte2}\n\n`;                    
        });

        console.log(`${numQuotes} Frase(s) Stranger Things: \n\n${quotes}`);                

    } catch (error){
        console.log("HOUVE UM ERRO: " + error.name + " - " + error.message);
    }
}

quotesStrangeThings(5);