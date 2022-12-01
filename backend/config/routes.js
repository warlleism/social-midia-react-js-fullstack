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

routes.post('/novopost', async (req, res) => {
    const {usuario_post, imagem_post, imagem_user} = req.body
    const clientes = await db.criarNovoPost(usuario_post, imagem_post, imagem_user)
    res.send(clientes)
})

routes.get('/usuario', async (req, res) => {
    const usuario = await db.listarUsuario()
    res.send(usuario[0])
})

module.exports = routes;