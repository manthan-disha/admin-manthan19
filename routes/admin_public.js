const router = require('express').Router(),
    User = require('../models/user')
module.exports.router = {
    get: ('/', (req, res) => {
        res.send('home route')
    }),
    get: ('/abcd', (req, res) => {
        res.send('abcd route')
    })
}