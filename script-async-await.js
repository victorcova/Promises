// Dica: perceba a diferença de usar o async e o await com relação ao then.

async function pokeTypes(){    
    try{ // dentro do try colocamos o que desejamos que seja executado
        const response = await fetch ("https://pokeapi.co/api/v2/type"); // fetch com await para fazer com que a promise seja executada completamente e retornada sem erros
        const data = await response.json(); // como o processo de conversão para JSON demora um pouco é usado o await para aguardar e retornar sem erros

        // throw new Error('ERRO'); // simulando um erro para ir para o catch e não rodar as linhas abaixo.

        const pokemonTypes = data.results.map(function (type) { // função aqui mapeando os dados
            return type.name; // retonando o tipo
        });

        console.log('Tipos de pokemons:', pokemonTypes);

    } catch(error) { // catch é chamado em caso de erro
        console.log('Houve um erro');
    }
}

// pokeTypes();