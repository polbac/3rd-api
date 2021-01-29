const axios = require('axios').default;

chuckAxios = axios.create({
    baseURL: process.env.CHUCK_API_BASE_URL
});


module.exports = {
    getRandomJoke() {
        return chuckAxios.get('/jokes/random')
            .then(res => res.data)
    },
    
}