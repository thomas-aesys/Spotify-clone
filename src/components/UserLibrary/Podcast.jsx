import React from 'react'
import './Podcast.css'
import { Link } from 'react-router-dom'

const Podcast = () => {
    return (
        <div className="container_content_home">
            <div className="cont">
                <i style={{color:'#fff', marginBottom:'30px',}} className="fas fa-podcast fa-5x"></i>
                <h2>Segui il tuo primo podcast</h2>
                <p>Segui i podcast che ti piacciono toccando l'apposito pulsante</p>
                <Link to="/search"><button>trova podcast</button></Link>
            </div>
        </div>
    )
}

export default Podcast;