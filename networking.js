
const getParams = {
    method: HTTPMethod.GET,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
};


export default class Networking {
    
    async fetchFromAPI(url, parameters = getParams){        
        return fetch(url, parameters)
            .then(this.handleErrors);
    }

    handleErrors(response){
        if (!response.ok) {
            throw Error(response.status);
        }
        return response.json();
    }

}