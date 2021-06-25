import React from 'react'
import ContentHome from './contentHome';
import ContentSearch from './contentSearch';
import ContentLibrary from './contentLibrary';
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
            </Switch>
        </div>
    )
}

export default Content;