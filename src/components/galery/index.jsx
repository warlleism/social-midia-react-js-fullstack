import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/provider";
import { Link } from "react-router-dom";
import Share from "../share/index";
import Spinner from "../spinner";
import Header from "../header";
import "./style.scss";


const Galeria = () => {

    const { mode } = useContext(Context);
    const [load, setLoad] = useState(true)
    const [favoritos, setFavoritos] = useState([])

    const ListarFavoritos = async () => {
        const options = {
            body: JSON.stringify({ id: localStorage.getItem("id") }),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        await fetch('http://localhost:3001/galeria', options)
            .then(data => data.json())
            .then((res) => {
                setFavoritos(res)
                setLoad(false)
            })
    }

    const Desfavoritar = async (post) => {
        setLoad(true)

        const options = {
            body: JSON.stringify({ post: post }),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        await fetch('http://localhost:3001/excluirPost', options)
            .then(data => data.json())
            .then((res) => setLoad(false))
        ListarFavoritos()
    }


    useEffect(() => {
        ListarFavoritos()
    }, [])

    return (
        <div style={{ height: "100%" }}>
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

                <div className="quadrado-1 qtr" style={{ background: mode == 'ligth' ? '#59c1bd24' : '#ffffff07' }}></div>
                <div className="quadrado-2 qtr" style={{ background: mode == 'ligth' ? '#59c1bd24' : '#ffffff07' }}></div>
                <div className="quadrado-3 qtr" style={{ background: mode == 'ligth' ? '#59c1bd24' : '#ffffff07' }}></div>
                <div className="quadrado-4 qtr" style={{ background: mode == 'ligth' ? '#59c1bd24' : '#ffffff07' }}></div>

                <Link to={'/'} className="back-content" style={{ color: mode == 'ligth' ? '#343232cc' : '#ffffff9f' }}>
                    <span className="material-symbols-outlined">
                        arrow_back
                    </span>
                    <div>Galeria</div>
                </Link>
                {
                    favoritos.map((e) => {
                        return (
                            <div className="container-galery-post" >
                                <div>
                                    <img style={{ borderRadius: 100 }} className="img" src={`data:image/png;base64,${e?.imagem_user}`} />
                                </div>
                                <div>
                                    <img className="img" src={e?.imagem_post} />
                                    <ul style={{ background: mode == 'ligth' ? '#f2f2f2' : '#262626' }}>
                                        <li>
                                            <span className="material-symbols-outlined" style={{ background: mode == 'ligth' ? '#f2f2f2' : '#262626' }}>
                                                chat_bubble
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <span className="material-symbols-outlined deslike" style={{ fontSize: 40, color: mode == 'ligth' ? '#59C1BD' : '#f2f2f2' }} onClick={() => Desfavoritar(e.id_post)}>
                                    delete
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default Galeria;
