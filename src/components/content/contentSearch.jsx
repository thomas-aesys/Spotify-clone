import React, { useEffect, useState } from 'react'
import './contentSearch.css'
import AllCategories from '../AllCategories/allcategories'

const ContentSearch = () => {
    return (
        <div className="container_content_home">
            <h2 className="title_content_home">Sfoglia tutto</h2>
            <AllCategories></AllCategories>
        </div>
    )
}

export default ContentSearch;