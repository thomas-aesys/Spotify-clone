import React from 'react'
import './playlistDetails.css'
import HeaderPlaylist from './HeaderPlaylist';
import ContentTracks from './ContentTracks';

const PlaylistDetails = () => {
 
    return (
        <div className="container_content_home">
            <HeaderPlaylist></HeaderPlaylist>
           <ContentTracks></ContentTracks>
        </div>
    )
}

export default PlaylistDetails;