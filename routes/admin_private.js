const router = require('express').Router(),
    User = require('../models/user'),
    Admin = require('../models/admin')


router.get('/',(req,res)=>{
    res.render('login')
})

router.get('/list', (req, res) => {
    User.find({}, (err, doc) => {
        if (err) return console.log(err)
        res.send(doc)
    })
})

module.exports = router