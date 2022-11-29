import React, { useContext } from "react";
import "./style.scss"
import { Context } from "../../context/provider"

const Header = () => {

    const { share, setShare } = useContext(Context);
    const { mode, setMode } = useContext(Context);

    return (
        <div className="header-container" style={{background: mode == 'ligth' ? '#59C1BD' : '#2A2B2C'}}>
            <div className="header-logo" style={{color: mode == 'ligth' ? '#343232' : '#F3EFE0'}}>
                <strong style={{color: mode == 'ligth' ? '#343232' : '#fff'}}>S</strong>carlet
            </div>

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
                    <span class="material-symbols-outlined">
                        home
                    </span>
                </li>
                <li>
                    <span class="material-symbols-outlined" onClick={() => setShare(true)}>
                        add_box
                    </span>
                </li>
                <li>
                    <span class="material-symbols-outlined">
                        favorite
                    </span>
                </li>

                <li>
                    <img src={require('../../image/user3.png')} />
                </li>
            </ul>

        </div>
    )
}

export default Header;