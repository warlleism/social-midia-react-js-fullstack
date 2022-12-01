
const connect = async () => {

    if (global.connection && global.connection.state !== 'disconnected') {
        return global.connection
    }

    const mysql = require("mysql2/promise")
    const connection = await mysql.createConnection("mysql://root:root@localhost:3306/scarlet")
    global.connection = connection
    return connection
}

const listarFavoritos = async (id) => {
    const conn = await connect();
    return await conn.query(`select * from favoritos where usuario_favoritou = ${id};`);
}

const listarPostes = async () => {
    const conn = await connect();
    return await conn.query(`select u.id, u.imagem_user, p.imagem_post, p.id_post, p.usuario_post, u.nome from usuarios u join posts p on u.id = p.usuario_post;`);
}

const listarComentarios = async (param) => {
    const conn = await connect();
    return await conn.query(`select u.nome, c.comentario, c.imagem_user_coments, c.usuario_coment, c.post_coment from usuarios u join comentarios c on u.id = c.usuario_coment where c.post_coment = ${param};`);
}

const criarNovoPost = async (usuario, postimg, usuarioimg) => {
    const conn = await connect();
    return await conn.query(`insert into posts (usuario_post, imagem_post, imagem_user) values (${usuario}, "${postimg}", "${usuarioimg}");`);
}

const favoritarPost = async (usuario_favoritou, imagem_post, id_post, img_user) => {
    const conn = await connect();
    const where = await conn.query(`select * from favoritos where id_post = "${id_post}";`)
    console.log("ID = ", id_post)
    if (where[0].length > 0) {
        console.log("favorito já adicionado")
    } else {
        console.log("adicionando novo favorito")
        return await conn.query(`insert into favoritos (usuario_favoritou, imagem_post, id_post, imagem_user) values (${usuario_favoritou}, "${imagem_post}", ${id_post}, "${img_user}");`);
    }
}

const listarUsuario = async () => {
    const conn = await connect();
    return await conn.query(`select * from usuarios where id = 1;`);
}

connect();

module.exports = { listarPostes, listarComentarios, listarUsuario, criarNovoPost, favoritarPost, listarFavoritos }