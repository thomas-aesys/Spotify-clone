import React from 'react'
import axios from 'axios'

const axiosSpotify = axios.create({
    baseURL: 'https://api.spotify.com/v1'
})

axiosSpotify.interceptors.request.use(config => {
    config.headers = {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
    }
    return config
},
    error => {
        return Promise.reject(error)
    }
)


export const getCategoriesPlaylist = (category_id = '') => axiosSpotify.get(`browse/categories/${category_id}/playlists?limit=40`)

export const getArtists = (id= '') => axiosSpotify.get(`artists/${id}`)

export const getAllNewReleases = () => axiosSpotify.get(`/browse/new-releases`)