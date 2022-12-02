import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/provider";
import GetUser from "../hook/getUserHook";
import Spinner from "../spinner";
import Share from "../share";
import Header from "../header";
import "./style.scss";
import { Link } from "react-router-dom";

const Body = () => {

    const { share, setShare } = useContext(Context);
    const [comentario, setComentario] = useState("")
    const [userPost, setUserPost] = useState([])
    const [coments, setComents] = useState([])
    const [load, setLoad] = useState(true)
    const { mode } = useContext(Context);
    const [userData] = GetUser()

    useEffect(() => {
        getPosts()
    }, [share])

    const getPosts = () => {
        fetch('http://localhost:3001/postes')
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem("user", data[0])
                setUserPost(data)
            })
    }


    const sendComent = async () => {
        const options = {
            body: JSON.stringify({ userId: localStorage.getItem("id"), comentario: comentario, userNome: localStorage.getItem("nome"), imgUser: localStorage.getItem("userImg"), id_post: localStorage.getItem("post") }),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        await fetch('http://localhost:3001/novocomentario', options)
            .then(res => res.json())
            .then(data => setComents(data))
    }

    const ShowComents = async (event) => {
        const options = {
            body: JSON.stringify({ id: event }),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        await fetch('http://localhost:3001/comentarios', options)
            .then(res => res.json())
            .then(data => {
                data[0].map((e) => localStorage.setItem("post", e?.post_coment))
                setComents(data)
            })
    }

    const FavoritarPost = async (imagem, id_post, imagem_user) => {
        const options = {
            body: JSON.stringify({ usuario_favoritou: localStorage.getItem("id"), imagem_post: imagem, id_post: id_post, imagem_user: imagem_user }),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        await fetch('http://localhost:3001/favoritar', options)
    }

    useEffect(() => {
        setTimeout(() => {
            setLoad(false)
        }, 1000)
    })

    return (
        <div id="main">
            <Share />
            <Header />
            {
                load

                    ?
                    <Spinner />
                    :
                    false
            }

            {
                coments?.length != 0
                    ?
                    <div className="master">
                        <span style={{ color: mode == 'ligth' ? '#1c1c1ce0' : '#fff', textAlign: "end", marginTop: 30, cursor: "pointer", width: "96%", fontSize: 50 }} className="material-symbols-outlined close-button-chat" onClick={() => setComents([])}>
                            close
                        </span>
                        <div className="main-chat">
                            <div className="container-chat-content" style={{ background: mode == 'ligth' ? '#f2f2f2' : '#343638' }}>
                                <div className="chat">
                                    {
                                        coments[0]?.map((e) => {
                                            return (
                                                <div className="comentario">
                                                    <div className="user">
                                                        <img style={{ borderRadius: 100 }} src={`data:image/png;base64,${e?.imagem_user_coments}`} />
                                                        <div className="nome" style={{ color: mode == 'ligth' ? '#343638' : '#f2f2f2' }}>{e?.nome}</div>
                                                    </div>
                                                    <div className="coment" style={{ color: mode == 'ligth' ? '#343638' : '#f2f2f2' }}>{e?.comentario}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="send-message-container">
                                <span style={{ color: mode == 'ligth' ? '#1c1c1ce0' : '#fff' }} className="material-symbols-outlined" onClick={() => sendComent()}>
                                    send
                                </span>
                                <input placeholder="comentar..." type="text" onChange={(event) => setComentario(event.target.value)} />
                            </div>
                        </div>
                    </div>
                    :
                    false
            }

            <div className="main-body" style={{ background: mode == 'ligth' ? '#f2f2f2' : '#151515' }}>

                <div className="container-body-profile" style={{ background: mode == 'ligth' ? '#f9f9f9' : '#343638' }}>
                    <div className="container-profile">
                        <div>
                            <img style={{ borderRadius: 100 }} src={`data:image/png;base64,${localStorage?.getItem("userImg")}`} />
                            <div style={{ color: mode == 'ligth' ? '#1c1c1ce0' : '#fff' }}>{localStorage?.getItem("nome")}</div>
                        </div>
                        <div>
                            <span className="material-symbols-outlined">
                                star
                            </span>
                        </div>
                    </div>
                    <ul>
                        <li style={{ color: mode == 'ligth' ? '#1c1c1ce0' : '#fff' }}>Seu perfil</li>
                        <li ><Link style={{ color: mode == 'ligth' ? '#1c1c1ce0' : '#fff' }} to={"./favorite"}>Favoritos</Link></li>
                        <li style={{ color: mode == 'ligth' ? '#1c1c1ce0' : '#fff' }}>Seus amigos</li>
                    </ul>
                    <ul>
                        <li><Link style={{ color: mode == 'ligth' ? '#1c1c1ce0' : '#fff' }} to={"./galery"}>Galeria</Link></li>
                        <li style={{ color: mode == 'ligth' ? '#1c1c1ce0' : '#fff' }} onClick={() => setShare(true)}>Adicionar nova foto</li>
                        <li style={{ color: mode == 'ligth' ? '#1c1c1ce0' : '#fff' }}>Sugestão de perfil</li>
                    </ul>
                </div>

                <div className="content-post">
                    {userPost[0]?.map((e) => {
                        return (
                            <div className="container-chat-post">
                                <div className="container-body-post" id="chatT">
                                    <div>
                                        <img style={{ borderRadius: 100 }} src={`data:image/png;base64,${e?.imagem_user}`} />
                                    </div>
                                    <div>
                                        <img className="img" src={e?.imagem_post} />
                                        <ul>
                                            <li>
                                                <span className="material-symbols-outlined" onClick={() => FavoritarPost(e?.imagem_post, e?.id_post, e?.imagem_user)}>
                                                    heart_plus
                                                </span>
                                            </li>
                                            <li>
                                                <span className="material-symbols-outlined" onClick={() => ShowComents(e?.id, e?.usuario_post)}>
                                                    chat_bubble
                                                </span>
                                            </li>
                                            <li>
                                                <span className="material-symbols-outlined">
                                                    download
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Body;