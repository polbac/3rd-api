const axios = require('axios')

const axiosPokemon = axios.create({
    baseURL: process.env.POKEMON_API_BASE_URL,
  });

module.exports = {
    listPokemons() {
        return axiosPokemon.get('pokemon')
    },

    detailPokemon(id) {
        return axiosPokemon.get(`pokemon/${id}`)
    }
}