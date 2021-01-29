const express = require('express')
const router = express.Router()
const jokesResource = require('../../resources/jokesResource')

router.use('/random', (req, res) => {
    jokesResource.getRandomJoke()
    .then(randomJoke => {
        res.json(randomJoke)
    })
    .catch(error => {
        console.log('error', error)
    })
})

module.exports = router