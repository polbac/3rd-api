
const API_BASE_URL="http://localhost:3000/api/"

const axiosAPI = axios.create({
    baseURL: API_BASE_URL,
});

const pokemonDataContainer = document.querySelector("#pokemon-data-container")
const jokeDataContainer = document.querySelector("#joke-data-container")

function renderPokemons(pokemons) {
    let htmlPokemonContainer = ""

    pokemons.forEach(({ name, url }) => {
        htmlPokemonContainer += `
        <tr>
            <td>${name}</td>
            <td>${url}</td>
        </tr>
        `
    })

    pokemonDataContainer.innerHTML = htmlPokemonContainer
}

function renderJoke(joke) {
    jokeDataContainer.innerHTML = joke
}

function loadPokemons() {
    axiosAPI.get('pokemons')
        .then(res => {
            renderPokemons(res.data.data)
        })
}

function loadJoke() {
    axiosAPI.get('jokes/random')
        .then(res => {
            renderJoke(res.data.data.value)
        })
}

loadPokemons()
loadJoke()