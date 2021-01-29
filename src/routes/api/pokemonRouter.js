const express = require('express')
const router = express.Router()
const pokemonResource = require('../../resources/pokemonResource')

router.get('/', (req, res) => {
    pokemonResource.getList()
        .then(pokemonList => {
            res.json(pokemonList)
        })
        .catch(error => {
            console.log('error', error)
        })
    
})
router.get('/:id', (req, res) => {
    console.log(req.params.id)
    pokemonResource.getDetail(req.params.id)
        .then(pokemonDetail => {
            res.json(pokemonDetail)
        })
        .catch(error => {
            console.log('error', error)
        })
    
})

module.exports = router