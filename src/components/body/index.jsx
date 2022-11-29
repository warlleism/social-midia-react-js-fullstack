import React, { useContext, useState } from "react";
import { Context } from "../../context/provider";
import Share from "../share";
import Header from "../header"

import "./style.scss"

const Body = () => {

    const { setShare } = useContext(Context);
    const { mode } = useContext(Context);

    return (
        <>
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

                    <div className="container-chat-post">

                        <div className="container-body-post" >

                            <div>
                                <img src={require('../../image/user2.png')} />
                            </div>

                            <div>
                                <div className="img" style={{ backgroundImage: `url(${require('../../image/people.jpg')})` }}>
                                </div>
                                <ul>
                                    <li>
                                        <span class="material-symbols-outlined">
                                            favorite
                                        </span>
                                    </li>
                                    <li>
                                        <span class="material-symbols-outlined">
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

                        <div className="container-body-chat" style={{ background: mode == 'ligth' ? '#f2f2f2' : '#343638' }}>

                            <div className="chat">
                                <div>
                                    <img src={require('../../image/user1.png')} />
                                    <div style={{ color: mode == 'ligth' ? '#1c1c1ce0' : '#fff' }} >@jessica_silva</div>
                                </div>

                                <div className="container-name-msg">
                                    <div>Linda imagem. irei baixar. irei usar no meu projeto!</div>
                                    <div>
                                        <span class="material-symbols-outlined">
                                            favorite
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="chat">
                                <div>
                                    <img src={require('../../image/user2.png')} />
                                    <div style={{ color: mode == 'ligth' ? '#1c1c1ce0' : '#fff' }} >@jessica_silva</div>
                                </div>

                                <div className="container-name-msg">
                                    <div>Linda imagem. irei baixar. irei usar no meu projeto!</div>
                                    <div>
                                        <span class="material-symbols-outlined">
                                            favorite
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="chat">
                                <div>
                                    <img src={require('../../image/user1.png')} />
                                    <div style={{ color: mode == 'ligth' ? '#1c1c1ce0' : '#fff' }} >@jessica_silva</div>
                                </div>

                                <div className="container-name-msg">
                                    <div>Linda imagem. irei baixar. irei usar no meu projeto!</div>
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

                        </div>
                    </div>

                    <div className="container-chat-post">

                        <div className="container-body-post">

                            <div>
                                <img src={require('../../image/user2.png')} />
                            </div>

                            <div>
                                <div className="img" style={{ backgroundImage: `url(${require('../../image/people-2.jpg')})` }}>
                                </div>
                                <ul>
                                    <li>
                                        <span class="material-symbols-outlined">
                                            favorite
                                        </span>
                                    </li>
                                    <li>
                                        <span class="material-symbols-outlined">
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

                        <div className="container-body-chat" style={{ background: mode == 'ligth' ? '#f2f2f2' : '#343638' }}>

                            <div className="chat">
                                <div>
                                    <img src={require('../../image/user1.png')} />
                                    <div style={{ color: mode == 'ligth' ? '#1c1c1ce0' : '#fff' }} >@jessica_silva</div>
                                </div>

                                <div className="container-name-msg">
                                    <div>Linda imagem. irei baixar. irei usar no meu projeto!</div>
                                    <div>
                                        <span class="material-symbols-outlined">
                                            favorite
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="chat">
                                <div>
                                    <img src={require('../../image/user2.png')} />
                                    <div style={{ color: mode == 'ligth' ? '#1c1c1ce0' : '#fff' }} >@jessica_silva</div>
                                </div>

                                <div className="container-name-msg">
                                    <div>Linda imagem. irei baixar. irei usar no meu projeto!</div>
                                    <div>
                                        <span class="material-symbols-outlined">
                                            favorite
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="chat">
                                <div>
                                    <img src={require('../../image/user1.png')} />
                                    <div style={{ color: mode == 'ligth' ? '#1c1c1ce0' : '#fff' }} >@jessica_silva</div>
                                </div>

                                <div className="container-name-msg">
                                    <div>Linda imagem. irei baixar. irei usar no meu projeto!</div>
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

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Body;