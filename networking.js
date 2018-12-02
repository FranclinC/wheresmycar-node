var axios = require("axios").default;


// const getParams = {
//     method: HTTPMethod.GET,
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     }
// };


module.exports = class Networking {
    
    async get(url) {
        return axios.get(url);
    }

    async post(url, parameters) {
        return axios.post(url, parameters)
            .then(this.handleErrors);
    }

    // async fetchFromAPI(url, parameters = {}){        
    //     return fetch(url, parameters)
    //         .then(this.handleErrors);
    // }

    handleErrors(response){
        if (!response.ok) {
            throw Error(response);
        }
        return response.json();
    }

}