import React, { useState, useEffect } from 'react'
import './playlistDetails.css'
import HeaderPlaylist from './HeaderPlaylist';
import ContentTracks from './ContentTracks';
import { useParams } from 'react-router-dom';
import { getPlaylistDetails } from '../../api/api';

const PlaylistDetails = (props) => {
    const [tracks, setTracks] = useState([])

    let { id } = useParams()

    useEffect(() => {
        getPlaylistDetails(id).then(res => setTracks(res.data.tracks.items))

    }, [])
    return (
        <div className="container_content_home1">
            <HeaderPlaylist></HeaderPlaylist>
            {
                tracks.map((elem,index)=> {
                    return <ContentTracks index={index + 1} trackName={elem.track.artists[0].name} albumName={elem.track.album.name} date={(elem.added_at.split('T'))[0]}></ContentTracks>
                })
            }
        </div>
    )
}

export default PlaylistDetails;