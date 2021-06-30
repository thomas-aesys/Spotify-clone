import React from 'react'
import './ContentTracks.css'
const ContentTracks = ({ index, trackImage, trackName, albumName, date }) => {

    return (
        <div className="albums">
            <div className="index">
                <p>{index}</p>
            </div>
            <div className="track_name">
                <p>{trackName}</p>
            </div>
            <div className="album_name">
                <p>{albumName}</p>
            </div>
            <div className="date">
                <p>{date}</p>
            </div>
        </div>
    )
}

export default ContentTracks;