import React, { useContext, useState } from "react";
import { Context } from "../../context/provider";
import "./style.scss"

const Share = () => {

    const { share, setShare } = useContext(Context);

    const [baseImage, setBaseImage] = useState("");


    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setBaseImage(base64);
    };

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const CloseContainers = () => {
        setBaseImage("")
        setShare(false)
    }

    return (
        <div>

            {
                share != false
                    ?
                    <>
                        <div className="close-button" onClick={() => CloseContainers()}>
                            <span className="material-symbols-outlined">
                                close
                            </span>
                        </div>
                        <div className="container-main-share">
                            <div>
                                <div>
                                    <span className="material-symbols-outlined reload" onClick={() => setBaseImage("")}>
                                        arrow_back
                                    </span>
                                    {
                                        baseImage != ''
                                            ?
                                            <div style={{
                                                backgroundImage: `url(data:image/png;base64${baseImage})`,
                                                backgroundPosition: "center",
                                                backgroundRepeat: "no-repeat",
                                                objectFit: "fill",
                                                backgroundSize: "100%",
                                            }}>
                                            </div>
                                            :
                                            <>
                                                <input type="file" onChange={(e) => { uploadImage(e) }} />
                                                clique aqui para selecionar uma foto
                                            </>
                                    }

                                </div>
                                <div style={{background: "#626262"}} onClick={() => CloseContainers()}>compartilhar</div>
                            </div>
                        </div >
                    </>
                    :
                    false}
        </div>
    )
}

export default Share;