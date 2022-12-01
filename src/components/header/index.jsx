import { Context } from "../../context/provider"
import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import "./style.scss"

const Header = () => {

    const { setShare } = useContext(Context);
    const { mode, setMode } = useContext(Context);

    return (
        <div className="header-container" style={{ background: mode == 'ligth' ? '#59C1BD' : '#2A2B2C' }}>

            <Link to={"/"} className="header-logo" style={{ color: mode == 'ligth' ? '#343232' : '#F3EFE0' }}>
                <strong style={{ color: mode == 'ligth' ? '#343232' : '#fff' }}>S</strong>carlet
            </Link>

            <div className="input-container">
                <input type="text" />
                <div className="container-glass-input">
                    <span class="material-symbols-outlined">
                        search
                    </span>
                </div>
            </div>

            <ul className="container-list-nav">
                <li>
                    <span class="material-symbols-outlined" onClick={() => mode == 'ligth' ? setMode('dark') : setMode('ligth')}>
                        dark_mode
                    </span>
                </li>
                <li>
                    <span class="material-symbols-outlined" onClick={() => setShare(true)}>
                        add_box
                    </span>
                </li>
                <li>
                    <Link to={"/galery"} class="material-symbols-outlined">
                        image
                    </Link>
                </li>
                <li>
                    <Link to={"/favorite"} class="material-symbols-outlined">
                        favorite
                    </Link>
                </li>

                <li>
                    <img style={{ borderRadius: 100 }} src={`data:image/png;base64,${localStorage?.getItem("userImg")}`} />
                </li>
            </ul>

        </div>
    )
}

export default Header;