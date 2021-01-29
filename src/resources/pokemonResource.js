const axios = require('axios').default;

pokemonAxios = axios.create({
    baseURL: process.env.POKEMON_API_BASE_URL
});

console.log('process.env.POKEMON_API_BASE_URL',process.env.POKEMON_API_BASE_URL)

module.exports = {
    getList() {
        return pokemonAxios.get('/pokemon')
            .then(res => res.data)
    },
    getDetail(id) {
        console.log(`/pokemon/${id}`)
        return pokemonAxios.get(`/pokemon/${id}`)
            .then(res => res.data)
    }
}