import React, { useEffect, useState } from 'react'
import './contentSearch.css'
import AllCategories from '../AllCategories/allcategories'
import { getAllCategories } from '../../api/api'

const ContentSearch = () => {
    const [cat, setCat] = useState([]);

    useEffect(() => {
        getAllCategories().then(res => console.log(res))
    }, [])

    return (
        <div className="container_content_home">
            <h2 className="title_content_home">Sfoglia tutto</h2>
            <AllCategories></AllCategories>
        </div>
    )
}

export default ContentSearch;