import React from 'react'
import './Podcast.css'
import { Link } from 'react-router-dom'

const Albums = () => {
    return (
        <div className="container_content_home">
            <div className="cont">
                <i style={{color:'#fff', marginBottom:'30px',}} className="fas fa-podcast fa-5x"></i>
                <h2>Segui il tuo primo album</h2>
                <p>Salva gli album toccando l'icona a forma di cuore</p>
                <Link to="/search" ><button>trova album</button></Link>
            </div>
        </div>
    )
}

export default Albums;