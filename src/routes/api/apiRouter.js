const express = require('express')
const router = express.Router()
const pokemonRouter = require('./pokemonRouter')
const jokesRouter = require('./jokesRouter')

router.use('/pokemons', pokemonRouter)
router.use('/jokes', jokesRouter)

module.exports = router