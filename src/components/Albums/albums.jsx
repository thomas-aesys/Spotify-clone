import React, { useEffect, useState } from 'react'
import { getAllNewReleases } from '../../api/api'
import './albums.css'

const Albums = () => {
    const [album, setAlbum] = useState([])

    useEffect(() => {
        getAllNewReleases().then(res => setAlbum(res.data.albums.items))
    })

    return (
        <div>
            <h2 className="title_playlist">Albums</h2>
            {
                album.slice(0, 5).map(elem => {
                    return (
                        <>
                            <div className="container_card">
                                <div className="card">
                                    <img src={elem.images[0].url} width={'161px'} height={'161px'}></img>
                                    <p className="card_name">{elem.name}</p>
                                    <p className="card_description">{elem.artists[0].name}</p>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Albums;