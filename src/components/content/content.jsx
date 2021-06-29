import React from 'react'
import ContentHome from './contentHome';
import ContentSearch from './contentSearch';
import ContentLibrary from './contentLibrary';
import PlaylistDetails from '../PlaylistDetails/playlistDetails';
import './content.css'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const Content = () => {
    return (
        <div className="container_content">
            <Switch>
                <Route exact path="/" component={ContentHome}></Route>
                <Route path="/search" component={ContentSearch}></Route>
                <Route path="/library" component={ContentLibrary}></Route>
                <Route path="/playlist/:id" component={PlaylistDetails}></Route>
            </Switch>
        </div>
    )
}

export default Content;