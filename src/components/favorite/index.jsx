import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/provider";
import Share from "../share/index";
import Spinner from "../spinner";
import Header from "../header";
import "./style.scss";

const Favorite = () => {

    const { mode } = useContext(Context);
    const [load, setLoad] = useState(true);
    const [favoritos, setFavoritos] = useState([])

    const ListarFavoritos = async () => {
        const options = {
            body: JSON.stringify({ id: localStorage.getItem("id") }),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        await fetch('http://localhost:3001/favoritos', options)
            .then(data => data.json())
            .then((res) => setFavoritos(res))
    }

    useEffect(() => {
        ListarFavoritos()
        setTimeout(() => {
            setLoad(false)
        }, 1000)
    }, [])



    return (
        <>
            {
                load
                    ?
                    <Spinner />
                    :
                    false
            }
            <Share />
            <Header />
            <div className="main-galery">

                {
                    favoritos.map((e) => {
                        return (
                            <div className="container-galery-post" >
                                <div>
                                    <img style={{ borderRadius: 100 }} className="img" src={`data:image/png;base64,${e?.imagem_user}`} />
                                </div>
                                <div>
                                    <img className="img" src={e?.imagem_post} />
                                    <ul>
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
