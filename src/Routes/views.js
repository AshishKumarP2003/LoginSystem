const express = require('express');
const router = express.Router();
const formidable = require('formidable')

router.get('/', (req, res) => {
    const data = {}
    res.render('index', data)
});

router.get('/register', (req, res) => {
    res.render('register',{});
})


module.exports = router;