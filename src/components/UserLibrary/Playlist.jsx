import React, { useEffect, useState } from 'react'
import {getUserSavedTracks} from '../../api/api'
import './Playlist.css'

const Playlist = ()=>{
    const [track,setTrack] = useState([]);

    useEffect(()=>{
        getUserSavedTracks().then(res => console.log(res.data.items))
    },[])

    return(
        <div className="container_content_home">
            <h2 className="title_content_home">Playlist</h2>
        </div>
    )
}

export default Playlist;