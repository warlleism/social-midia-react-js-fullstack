const express = require('express')
const routes = express.Router()
const db = require('../model/db')


routes.get('/postes', async (req, res) => {
    const clientes = await db.listarPostes()
    res.send(clientes)
})

routes.post('/comentarios', async (req, res) => {

    const {id} = req.body
    const clientes = await db.listarComentarios(id)
    res.send(clientes)
})

module.exports = routes;