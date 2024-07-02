import { getRequest, postRequest } from "./http-module.js";

    // Adiciona um ouvinte de evento para o botão de Personagens
    document.getElementById('btnChar').addEventListener('click', function() {
        getCharacters();
    });

    // Adiciona um ouvinte de evento para o botão de Episódios (fictício)
    document.getElementById('btnEpisodes').addEventListener('click', function() {
        alert('Função de Episódios ainda não implementada');
    });


function getCharacters(){
    alert("foi")
    getRequest('/character')
        .then(data => {
            console.log('Dados recebidos:', data);
            listCharacters(data)
        })
        .catch(error => {
            console.error('Erro ao receber dados:', error);
            return error
        });
}


function getEpisodes(){
    alert("foi")

    getRequest('/episode')
        .then(data => {
            console.log('Resposta do servidor:', data);
            return data
        })
        .catch(error => {
            console.error('Erro ao enviar dados:', error);
            return error
        });
}


function listCharacters(characters) {
    const characterList = document.getElementById('character-list');
    characters.results.forEach(character => {
        // Criando a div do personagem
        const characterCard = document.createElement('div');
        characterCard.classList.add('character-card');
        
        // Adicionando imagem do personagem
        const img = document.createElement('img');
        img.src = character.image;
        img.alt = character.name;
        characterCard.appendChild(img);
        
        // Adicionando o nome do personagem
        const name = document.createElement('h3');
        name.innerText = character.name;
        characterCard.appendChild(name);
        
        // Adicionando o status do personagem
        const status = document.createElement('p');
        status.innerText = `Status: ${character.status}`;
        characterCard.appendChild(status);
        
        // Adicionando a espécie do personagem
        const species = document.createElement('p');
        species.innerText = `Species: ${character.species}`;
        characterCard.appendChild(species);
        
        // Adicionando a localização atual do personagem
        const location = document.createElement('p');
        location.innerText = `Location: ${character.location.name}`;
        characterCard.appendChild(location);
        
        // Adicionando a div do personagem à lista de personagens
        characterList.appendChild(characterCard);
    });
}

export {getCharacters, getEpisodes}