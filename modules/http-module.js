if(!window.axios){
    throw new Error("Axios não foi carregado");
}

const apiClient = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
})

function getRequest(endpoint) {
    return apiClient.get(endpoint)
        .then(response => response.data)
        .catch(error => {
            console.error('Erro na requisição GET:', error);
            throw error;
        });
}

function postRequest(endpoint, data) {
    return apiClient.post(endpoint, data)
        .then(response => response.data)
        .catch(error => {
            console.error('Erro na requisição POST:', error);
            throw error;
        });
}

export { getRequest, postRequest };