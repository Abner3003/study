import { getRequest, postRequest } from "./http-module";



function getCharacters(){
    alert("foi")
    getRequest('/character')
        .then(data => {
            console.log('Dados recebidos:', data);
            return data

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

export {getCharacters, getEpisodes}