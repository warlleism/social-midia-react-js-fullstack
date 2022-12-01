

import React, { useState } from "react";

const GetUser = () => {

    const [stored] = useState(() => {

        try {
            fetch('http://localhost:3001/usuario')
                .then((res) => res.json())
                .then((data) => {
                    data.map((e) => {
                        localStorage.setItem("id", e?.id)
                        localStorage.setItem("userImg", e?.imagem_user)
                        localStorage.setItem("nome", e?.nome)
                    })
                })
        } catch (error) {
            return { erro: error }
        }
    })


    return [stored]

}

export default GetUser;
