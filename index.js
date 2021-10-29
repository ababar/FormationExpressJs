const express = require('express')
const app = express()

const equipes = require('./equipe.json')

app.listen(82, ()=>{
    console.log('Rest API ABABAR');
})

app.get('/equipes', (req, res) => {
    res.send('Liste des equipes')
})