const express = require('express')
const router = express.Router()
const pokemonResource = require('../../resources/pokemonResource')

router.get('/', async (req, res) => {
    try {
        const pokemons = await pokemonResource.listPokemons()
        
        res.json({
            meta: {
                status: 'success',
                count: pokemons.data.results.length,
            },
            data: pokemons.data.results
        })
    } catch(error) {
        res.status(500).json({
            meta: {
                status: 'error',
            },
            error
        })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const idPokemon = req.params.id
        const detail = await pokemonResource.detailPokemon(idPokemon)

        res.json({
            meta: {
                status: 'success',
            },
            data: detail.data
        })
    } catch(error) {
        res.status(500).json({
            meta: {
                status: 'error',
            },
            error
        })
    }

})

module.exports = router