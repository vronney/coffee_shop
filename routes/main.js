const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    const data = {
        title: 'Manchitas By Elsa',
        description: 'Welcome to our house of comida! We hope you enjoy our broad selection of comidas from Mexico.'
    }

    res.render('home', data)
})

module.exports = router