import React from 'react'
import Playlist from '../UserLibrary/Playlist';
import Podcast from '../UserLibrary/Podcast';
import Albums from '../UserLibrary/Albums'
import Artists from '../UserLibrary/Artists';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const ContentLibrary = () => {

    return (
        <Switch>
            <Route exact path="/library/playlists" component={Playlist}></Route>
            <Route path="/library/podcast" component={Podcast}></Route>
            <Route path="/library/artits" component={Artists}></Route>
            <Route path="/library/albums" component={Albums}></Route>
        </Switch>
    )
}

export default ContentLibrary;