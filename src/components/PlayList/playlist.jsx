import React, { useEffect, useState } from 'react'
import { getCategoriesPlaylist } from '../../api/api'
import { date } from '../../utils/date'
import './playlist.css'

const Playlist = () => {
    const [topplaylist, setTopPlaylist] = useState([])
    const [partyplaylist, setPartyPlaylist] = useState([])
    const [moodplaylist, setMoodPlaylist] = useState([])

    useEffect(() => {
        getCategoriesPlaylist('party').then(res => setPartyPlaylist(res.data.playlists.items))

        getCategoriesPlaylist('mood').then(res => setMoodPlaylist(res.data.playlists.items))

        getCategoriesPlaylist('toplists').then(res => setTopPlaylist(res.data.playlists.items))

    }, [])

    return (
        <>
            {
                topplaylist.slice(0, 5).map(elem => {
                    return (
                        <div className="container_card">
                            <div className="card">
                                <img src={elem.images[0].url} width={'161px'} height={'161px'}></img>
                                <p className="card_name">{elem.name}</p>
                                <p className="card_description">{elem.description}</p>
                            </div>
                        </div>
                    )
                })
            }

            <h2 className="title_playlist">Party</h2>
            {
                partyplaylist.slice(0, 5).map(elem => {
                    return (

                        <div className="container_card">
                            <div className="card">
                                <img src={elem.images[0].url} width={'161px'} height={'161px'}></img>
                                <p className="card_name">{elem.name}</p>
                                <p className="card_description">{elem.description}</p>
                            </div>
                        </div>
                    )
                })
            }

            <h2 className="title_playlist">Mood</h2>
            {
                moodplaylist.slice(5, 10).map(elem => {
                    return (
                        <div className="container_card">
                            <div className="card">
                                <img src={elem.images[0].url} width={'161px'} height={'161px'}></img>
                                <p className="card_name">{elem.name}</p>
                                <p className="card_description">{elem.description}</p>
                            </div>
                        </div>

                    )
                })
            }

        </>
    )
}

export default Playlist;