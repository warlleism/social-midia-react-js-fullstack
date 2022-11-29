import React, { useContext, useState } from "react";
import { Context } from "../../context/provider";
import Share from "../share/index"
import Header from "../header"
import "./style.scss"

const Favorite = () => {

    const { setShare } = useContext(Context);
    const { mode } = useContext(Context);

    const data = [1, 2, 3, 4, 5, 6, 7, 8, 7]

    return (
        <>
            <Share />
            <Header />
            <div className="main-galery" style={{ background: mode == 'ligth' ? '#f2f2f2' : '#151515' }}>

                {
                    data.map(() => {
                        return (
                            <div className="container-galery-post" >
                                <div>
                                    <img src={require('../../image/user1.png')} />
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
                        )
                    })
                }
            </div>
        </>
    )
}

export default Favorite;
