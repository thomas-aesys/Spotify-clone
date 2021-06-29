import React, { useEffect, useState } from 'react'
import { getAllCategories } from '../../api/api'
import { randomColors } from '../../utils/randomColor'
import './allcategories.css'

const AllCategories = () => {
    const [cat, setCat] = useState([]);
    useEffect(() => {
        getAllCategories(40).then(res => setCat(res.data.categories.items))
    }, [])
    
    return (
        <div>
            {
                cat.map(elem => {
                    return (
                        <>
                            <div className="container_card3">
                                <div style={{backgroundColor: randomColors()}} className="card3">
                                    <p className="card_name3">{elem.name}</p>
                                    <img className="card_image3" src={elem.icons[0].url}></img>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default AllCategories;