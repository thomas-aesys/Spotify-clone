import React, { useEffect, useState } from 'react'
import { getArtists } from '../../api/api'
import './artists.css'

const Artists = () => {
    const [artist1, setArtist1] = useState({});
    const [artist2, setArtist2] = useState({});
    const [artist3, setArtist3] = useState({});
    const [artist4, setArtist4] = useState({});
    const [artist5, setArtist5] = useState({});

    useEffect(() => {
        getArtists('0oSGxfWSnnOXhD2fKuz2Gy').then(res => setArtist1(res.data))

        getArtists('3dBVyJ7JuOMt4GE9607Qin').then(res => setArtist2(res.data))

        getArtists('08td7MxkoHQkXnWAYD8d6Q').then(res => setArtist3(res.data))

        getArtists('43ZHCT0cAZBISjO8DG9PnE').then(res => setArtist4(res.data))

        getArtists('0OdUWJ0sBjDrqHygGUXeCF').then(res => setArtist5(res.data))


    }, [])

    // console.log(artist1.images[0].url)
    return (
        <>
            <h2 className="title_playlist">Artisti</h2>
            <div className="container_card2">
                <div className="card">
                    <img className="card_image" src={artist1.images ? artist1.images[0].url : ""}></img>
                    <p className="card_name">{artist1.name}</p>
                    <p className="card_type">{artist1.type}</p>
                </div>
                <div className="card">
                    <img className="card_image" src={artist2.images ? artist2.images[0].url : ""}></img>
                    <p className="card_name">{artist2.name}</p>
                    <p className="card_type">{artist2.type}</p>
                </div>
                <div className="card">
                    <img className="card_image" src={artist3.images ? artist3.images[0].url : ""}></img>
                    <p className="card_name">{artist3.name}</p>
                    <p className="card_type">{artist3.type}</p>
                </div>
                <div className="card">
                    <img className="card_image" src={artist4.images ? artist4.images[0].url : ""}></img>
                    <p className="card_name">{artist4.name}</p>
                    <p className="card_type">{artist4.type}</p>
                </div>
                <div className="card">
                    <img className="card_image" src={artist5.images ? artist5.images[0].url : ""}></img>
                    <p className="card_name">{artist5.name}</p>
                    <p className="card_type">{artist5.type}</p>
                </div>
            </div>
        </>
    )
}

export default Artists;