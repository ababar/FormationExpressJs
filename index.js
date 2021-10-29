const express = require('express')
const app = express()

const equipes = require('./equipe.json')

app.listen(82, ()=>{
    console.log('Rest API Express JS');
})

app.get('/equipes', (req, res) => {
    // res.send('Liste des equipes')
    res.status(200).json(equipes);
})
app.get('/equipes/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const equipe = equipes.find(equipe => equipe.id === id)
    res.status(200).json(equipe);
})