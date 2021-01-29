const express = require('express')
const router = express.Router()

const jokesResource = require('../../resources/jokesResource')


router.get('/random', async (req, res) => {

    const joke = await jokesResource.randomJoke()
    
    console.log(joke)

    res.json({
        meta: {
            status: 'success',
        },
        data: joke.data
    })

})

module.exports = router