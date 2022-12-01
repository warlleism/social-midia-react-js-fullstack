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
    const { mode } = useContext(Context);
    const [userPost, setUserPost] = useState([])
    const [coments, setComents] = useState([])
    const [load, setLoad] = useState(true)
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
            .then(data => setComents(data))
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
            .then(data => console.log(data))
    }

    useEffect(() => {
        setTimeout(() => {
            setLoad(false)
        }, 1000)
    })

    return (
        <div>
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
                coments.length != 0
                    ?
                    <div className="container-body-chat" style={{ background: mode == 'ligth' ? '#f2f2f2' : '#343638' }}  >
                        <span style={{ color: mode == 'ligth' ? '#1c1c1ce0' : '#fff' }} class="material-symbols-outlined close-button-chat" onClick={() => setComents([])}>
                            close
                        </span>
                        {
                            coments[0]?.map((e) => {
                                return (
                                    <>
                                        <div className="chat">
                                            <div>
                                                <img src={`data:image/png;base64,${e?.imagem_user_coments}`} />
                                                <div style={{ color: mode == 'ligth' ? '#1c1c1ce0' : '#fff' }} >{e.nome}</div>
                                            </div>

                                            <div className="container-name-msg">
                                                <div>{e.comentario}</div>
                                                <div>
                                                    <span class="material-symbols-outlined">
                                                        favorite
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="send-message-container">
                                            <span style={{ color: mode == 'ligth' ? '#1c1c1ce0' : '#fff' }} class="material-symbols-outlined">
                                                send
                                            </span>
                                            <input placeholder="comentar..." type="text" />
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    :
                    false
            }

            <div className="main-body" style={{ background: mode == 'ligth' ? '#f2f2f2' : '#151515' }}>

                <div className="container-body-profile" style={{ background: mode == 'ligth' ? '#f2f2f2' : '#343638' }}>
                    <div className="container-profile">
                        <div>
                            <img style={{ borderRadius: 100 }} src={`data:image/png;base64,${localStorage?.getItem("userImg")}`} />
                            <div style={{ color: mode == 'ligth' ? '#1c1c1ce0' : '#fff' }}>{localStorage?.getItem("nome")}</div>
                        </div>
                        <div>
                            <span class="material-symbols-outlined">
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
                                                <span class="material-symbols-outlined" onClick={() => FavoritarPost(e?.imagem_post, e?.id_post, e?.imagem_user)}>
                                                    heart_plus
                                                </span>
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined" onClick={() => ShowComents(e?.id, e?.usuario_post)}>
                                                    chat_bubble
                                                </span>
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
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