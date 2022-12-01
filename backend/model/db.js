
const connect = async () => {

    if (global.connection && global.connection.state !== 'disconnected') {
        return global.connection
    }

    const mysql = require("mysql2/promise")
    const connection = await mysql.createConnection("mysql://root:root@localhost:3306/scarlet")
    global.connection = connection
    return connection
}

const listarPostes = async () => {
    const conn = await connect();
    return await conn.query(`select u.id, u.imagem_user, p.imagem_post, p.usuario_post, u.nome from usuarios u join posts p on u.id = p.usuario_post;`);
}

const listarComentarios = async (param) => {
    const conn = await connect();
    return await conn.query(`select u.nome, c.comentario, c.imagem_user_coments, c.usuario_coment, c.post_coment from usuarios u join comentarios c on u.id = c.usuario_coment where c.post_coment = ${param};`);
}

const criarNovoPost = async (usuario, postimg, usuarioimg) => {
    const conn = await connect();
    return await conn.query(`insert into posts (usuario_post, imagem_post, imagem_user) values (${usuario}, "${postimg}", "${usuarioimg}");`);
}

const listarUsuario = async () => {
    const conn = await connect();
    return await conn.query(`select * from usuarios where id = 1;`);
}

connect();

module.exports = { listarPostes, listarComentarios, listarUsuario, criarNovoPost }