const axios = require('axios')

const POKEMON_API_BASE_URL="https://pokeapi.co/api/v2"

const axiosPokemon = axios.create({
    baseURL: POKEMON_API_BASE_URL,
  });

module.exports = {
    listPokemons() {
        return axiosPokemon.get('pokemon')
    },

    detailPokemon(id) {
        return axiosPokemon.get(`pokemon/${id}`)
    }
}