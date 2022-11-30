import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/provider";
import Share from "../share";
import Header from "../header"

import "./style.scss"

const Body = () => {

    const { setShare } = useContext(Context);
    const { mode } = useContext(Context);
    const [userPost, setUserPost] = useState([])
    const [coments, setComents] = useState([])

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = () => {
        fetch('http://localhost:3001/postes')
            .then((res) => res.json())
            .then((data) => {
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

    return (
        <>
            {console.log(coments)}
            <Share />
            <Header />
            <div className="main-body" style={{ background: mode == 'ligth' ? '#f2f2f2' : '#151515' }}>

                <div className="container-body-profile" style={{ background: mode == 'ligth' ? '#f2f2f2' : '#343638' }}>
                    <div className="container-profile">
                        <div>
                            <img src={require('../../image/user1.png')} />
                            <div style={{ color: mode == 'ligth' ? '#1c1c1ce0' : '#fff' }}>@jessica_silva</div>
                        </div>
                        <div>
                            <span class="material-symbols-outlined">
                                star
                            </span>
                        </div>
                    </div>
                    <ul>
                        <li style={{ color: mode == 'ligth' ? '#1c1c1ce0' : '#fff' }}>Seu perfil</li>
                        <li style={{ color: mode == 'ligth' ? '#1c1c1ce0' : '#fff' }}>Favoritos</li>
                        <li style={{ color: mode == 'ligth' ? '#1c1c1ce0' : '#fff' }}>Seus amigos</li>
                    </ul>
                    <ul>
                        <li style={{ color: mode == 'ligth' ? '#1c1c1ce0' : '#fff' }}>Criar nova galeria</li>
                        <li style={{ color: mode == 'ligth' ? '#1c1c1ce0' : '#fff' }} onClick={() => setShare(true)}>Adicionar nova foto</li>
                        <li style={{ color: mode == 'ligth' ? '#1c1c1ce0' : '#fff' }}>Sugestão de perfil</li>
                    </ul>
                </div>

                <div className="content-post">

                    {userPost[0]?.map((e) => {
                        return (

                            <div className="container-chat-post">

                                <div className="container-body-post" >

                                    <div>
                                        <img style={{ borderRadius: 100 }} src={`data:image/png;base64,${e?.imagem_user}`} />
                                    </div>

                                    <div>
                                        <img className="img" src={`data:image/png;base64,${e?.imagem_post}`} />
                                        <ul>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    favorite
                                                </span>
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined" onClick={() => ShowComents(e.id)}>
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

                                {
                                    coments.length != 0
                                        ?
                                        <div className="container-body-chat" style={{ background: mode == 'ligth' ? '#f2f2f2' : '#343638' }}>
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
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}

export default Body;