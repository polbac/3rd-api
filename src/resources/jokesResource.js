const axios = require('axios')


const axiosJokes = axios.create({
    baseURL: process.env.CHUCK_API_BASE_URL,
  });

module.exports = {
    randomJoke() {
        return axiosJokes.get('random')
    },
}