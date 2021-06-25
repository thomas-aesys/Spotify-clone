import React, { useState, useEffect} from 'react'
import Sidebar from '../sidebar/sidebar'
import Navbar from '../navbar/navbar'
import './home.css'
import Content from '../content/content'
import {
    BrowserRouter as Router
} from "react-router-dom";

const Home = () => {
    const [navbar, setNavbar] = useState();
    useEffect(() => {
        let url = window.location.pathname.split('/')[1]
        switch (url) {
            case 'search':
                setNavbar('search')
                break;
            case 'library':
                setNavbar('library')
                break;
            default:
                break;
        }
    }, [])
    return (
        <Router>
            <div className="body">
                <div className="main">
                    <Sidebar setNavbar={setNavbar}></Sidebar>
                    <Navbar navbar={navbar}></Navbar>
                    <Content></Content>
                </div>
            </div>
        </Router>
    )
}

export default Home;