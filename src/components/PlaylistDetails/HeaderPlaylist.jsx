import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPlaylistDetails } from '../../api/api';
import './HeaderPlaylist.css'

const HeaderPlaylist = () => {
    const [playlist, setPlaylist] = useState([])

    let { id } = useParams()

    useEffect(() => {
        getPlaylistDetails(id).then(res => setPlaylist(res.data))
    }, [])

    return (
        <>
            <div className="container_details">
                <div >
                    <img src={playlist.images ? playlist.images[0].url : ''} width="220px" height="220px" />
                </div>
                <div className="generals_details">
                    <p id="type">{playlist.type}</p>
                    <h2>{playlist.name}</h2>
                    <p>{playlist.description}</p>
                    <p>Spotify • {playlist.followers ? playlist.followers.total : ""} Mi piace</p>
                </div>
            </div>
            <div className="button_container">
                <button className="button_play2">
                    <i class="fas fa-play"></i>
                </button>
                <button className="button_hearth2">
                    <i class="far fa-heart fa-2x"></i>
                </button>
                <button className="button_dot2">
                    <i class="fas fa-ellipsis-h"></i>
                </button>
            </div>
            <div className="top_desc">
                <div>
                    #
                </div>
                <div className="top">
                    titolo
                </div>
                <div className="top">
                    album
                </div>
                <div className="top">
                    aggiunto il
                </div>
            </div>
            <hr style={{ color: '#fff' }} />

        </>
    )
}

export default HeaderPlaylist;