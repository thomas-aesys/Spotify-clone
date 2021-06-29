import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPlaylistDetails } from '../../api/api';

const ContentTracks = () => {
    const [tracks, setTracks] = useState([])

    let { id } = useParams()

    useEffect(() => {
        getPlaylistDetails(id).then(res => setTracks(res.data.tracks.items))

    }, [])
    return (
        <div className="top_desc">
            <div className="albums1">
                {
                    tracks.map((elem,index) => {
                        return <>
                            <div className="top_first">
                                {index + 1}
                            </div>
                        </>
                    })
                }
            </div>
            <div className="albums">
                {
                    tracks.map(elem => {
                        return <>
                            <div className="top_name">
                                <p>{elem.track.artists[0].name}</p>
                            </div>
                        </>
                    })
                }
            </div>
            <div className="albums">
                {
                    tracks.map(elem => {
                        return <>
                            <div className="top_album">
                                <p>{elem.track.album.name}</p>
                            </div>
                        </>
                    })
                }
            </div>
            <div className="albums">
                {
                    tracks.map(elem => {
                        return <>
                            <div className="top2">
                                <p>{(elem.added_at.split('T'))[0]}</p>
                            </div>
                        </>
                    })
                }
            </div>
        </div>
    )
}

export default ContentTracks;