const axios = require('axios')

const JOKES_API_BASE_URL="https://api.chucknorris.io/jokes/"

const axiosJokes = axios.create({
    baseURL: JOKES_API_BASE_URL,
  });

module.exports = {
    randomJoke() {
        return axiosJokes.get('random')
    },
}