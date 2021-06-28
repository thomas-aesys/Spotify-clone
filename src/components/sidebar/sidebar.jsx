import React from 'react'
import spotify_logo from '../../spotify-icons-logos/spotify-icons-logos/logos/02_CMYK/02_PNG/Spotify_Logo_CMYK_White.png'
import './sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = ({ setNavbar }) => {
    return (
        <>
            <div className="main_side">
                <div className="logo">
                    <img src={spotify_logo} width={140} height={40} />
                </div>
                <Link to="/">
                    <button onClick={() => setNavbar('default')} className="button_home">
                        <i class="fas fa-home" height="24" width="24"></i>
                        <span className="home_button">Home</span>
                    </button>
                </Link>
                <Link to="/search">
                    <button onClick={() => setNavbar('search')} className="button_search">
                        <i class="fas fa-search" height="24" width="24"></i>
                        <span className="search_button" >Cerca</span>
                    </button>
                </Link>
                <Link to="/library/playlists">
                    <button onClick={() => setNavbar('library')} className="button_library">
                        <i class="far fa-bookmark" height="24" width="24"></i>
                        <span className="library_button" >La tua libreria</span>
                    </button>
                </Link>
                <button onClick={() => setNavbar('default')} className="button_plus">
                    <i class="far fa-plus-square" height="24" width="24"></i>
                    <span className="plus_button">Crea playlist</span>
                </button>
                <button onClick={() => setNavbar('default')} className="button_heart">
                    <i class="far fa-heart" height="24" width="24"></i>
                    <span className="heart_button">Brani preferiti</span>
                </button>
                <hr className="hr" />
                <div className="side_content">
                    <button onClick={() => setNavbar('default')} className="button_playlist">
                        <span className="playlist_button">La mia playlist n. 2</span>
                    </button>
                    <button onClick={() => setNavbar('default')} className="button_playlist">
                        <span className="playlist_button">La mia playlist n. 1</span>
                    </button>
                </div>
                <div style={{width:'250px'}}>
                    <button className="button_playlist">
                        <span className="playlist_button">
                            <i class="fab fa-spotify"></i>&nbsp;
                            Effettua l'upgrade a Premium
                        </span>
                    </button>
                </div>
            </div>
            <footer className="footer_main">
                <div className="footer_left"></div>
                <div className="footer_center">
                    <div className="player_controls">
                        <div className="player_controls_buttons">
                            <button className="button_random">
                                <i class="fas fa-random"></i>
                            </button>
                            <button className="button_backward">
                                <i class="fas fa-step-backward"></i>
                            </button>
                            <button className="button_play">
                                <i class="fas fa-play"></i>
                            </button>
                            <button className="button_forward">
                                <i class="fas fa-step-forward"></i>
                            </button>
                            <button className="button_redo">
                                <i class="fas fa-redo"></i>
                            </button>
                        </div>
                    </div>
                    <div className="playback_bar">
                        <div className="playback_bar_time">
                            0:00
                        </div>
                        <div className="progress_bar_wrapper">
                            <div className="progress_bar"></div>
                        </div>
                        <div className="playback_bar2">
                            <div className="playback_bar_time">
                                0:00
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_right">
                    <div className="extra_controls">
                        <button className="button_redo">
                            <i class="fas fa-layer-group"></i>
                        </button>
                        <button className="button_redo">
                            <i class="fab fa-bluetooth-b"></i>
                        </button>
                        <button className="button_redo">
                            <i class="fas fa-volume-up"></i>
                            &nbsp;
                            &nbsp;
                            <input className="input_range" type="range" />
                        </button>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Sidebar;