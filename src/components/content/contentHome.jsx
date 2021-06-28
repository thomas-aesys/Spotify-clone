import React, { useEffect, useState } from 'react'
import './contentHome.css'
import { date } from '../../utils/date'
import Playlist from '../PlayList/playlist'
import Artists from '../Artists/artists'
import Albums from '../Albums/albums'

const ContentHome = () => {

    return (
        <div className="container_content_home">
            <h2 className="title_content_home">{date()} con le Top Playlist</h2>
            <Playlist></Playlist>
            <Artists></Artists>
            <Albums></Albums>
        </div>
    )
}

export default ContentHome;