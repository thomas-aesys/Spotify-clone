import React, { useEffect, useState } from 'react'
import './Playlist.css'
import { getPlaylist } from '../../api/api'

const Playlist = () => {
    const [playlist, setPlaylist] = useState([]);

    useEffect(() => {
        getPlaylist().then(res => setPlaylist(res.data.items))
    }, [])

    return (
        <div className="container_content_home">
            <h2 className="title_playlist">Playlist</h2>
            {
                playlist.map(elem => {
                    return (
                        <>
                            <div className="container_card">
                                <div className="card">
                                    <img src={elem.images[0].url} width={'161px'} height={'161px'}></img>
                                    <p className="card_name">{elem.name}</p>
                                    <p className="card_description">{elem.description}</p>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Playlist;