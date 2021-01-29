const express = require('express')
const router = express.Router()

const apiRouterPokemon = require('./apiRouterPokemons')
const apiRouterJokes = require('./apiRouterJokes')

router.use('/pokemons', apiRouterPokemon)
router.use('/jokes', apiRouterJokes)

module.exports = router