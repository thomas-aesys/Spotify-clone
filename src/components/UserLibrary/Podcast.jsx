import React from 'react'
import './Podcast.css'

const Podcast = () => {
    return (
        <div className="container_content_home">
            <div className="cont">
                <i style={{color:'#fff', marginBottom:'30px',}} className="fas fa-podcast fa-5x"></i>
                <h2>Segui il tuo primo podcast</h2>
                <p>Segui i podcast che ti piacciono toccando l'apposito pulsante</p>
                <button>trova podcast</button>
            </div>
        </div>
    )
}

export default Podcast;