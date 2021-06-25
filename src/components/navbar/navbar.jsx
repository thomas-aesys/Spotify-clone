import React, { useEffect } from 'react'
import './navbar.css'

const Navbar = ({ navbar }) => {
    const userName = sessionStorage.getItem('user')

    return (
        <div>
            <div className="top-bar">
                <div className="navbar_left">
                    <button className="angle_buttons">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button className="angle_buttons">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
                <div className="navbar_center">
                    <button>Effettua l'upgrade</button>
                </div>
                <div className="navbar_right">
                    <button className="user_button">
                        <i class="far fa-user"></i>
                        {userName}
                        <i class="fas fa-caret-down"></i>
                    </button>
                </div>
            </div>
            {
                navbar == 'search' ?
                    <>
                        <div className="top-bar">
                            <div className="navbar_left2">
                                <button className="angle_buttons">
                                    <i class="fas fa-chevron-left"></i>
                                </button>
                                <button className="angle_buttons">
                                    <i class="fas fa-chevron-right"></i>
                                </button>
                            </div>
                            <div className="navbar_center2">
                                <button className="button_search_input"><i class="fas fa-search"></i></button>
                                <input type="text" placeholder="Artisti,brani o podcast"></input>
                            </div>

                            <div className="navbar_right">
                                <button className="user_button">
                                    <i class="far fa-user"></i>
                                    {userName}
                                    <i class="fas fa-caret-down"></i>
                                </button>
                            </div>
                        </div>
                    </> :

                    navbar == 'library' ?
                        <>
                            <div className="top-bar">
                                <div className="navbar_left3">
                                    <button className="angle_buttons">
                                        <i class="fas fa-chevron-left"></i>
                                    </button>
                                    <button className="angle_buttons">
                                        <i class="fas fa-chevron-right"></i>
                                    </button>
                                </div>
                                <div className="navbar_center3">
                                    <button className="button_navbar_center3">Playlist</button>
                                    <button className="button_navbar_center3">Podcast</button>
                                    <button className="button_navbar_center3">Artisti</button>
                                    <button className="button_navbar_center3">Album</button>
                                </div>

                                <div className="navbar_right">
                                    <button className="user_button">
                                        <i class="far fa-user"></i>
                                        {userName}
                                        <i class="fas fa-caret-down"></i>
                                    </button>
                                </div>
                            </div>
                        </> :
                        <div></div>
            }
        </div>
    )
}

export default Navbar;