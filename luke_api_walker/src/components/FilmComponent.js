import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FilmComponent = ( props ) => {
    const [ film, setFilm ] = useState({
        selected_film: ""
    })
    useEffect( () => {
        fetchFilm();
    }, [film])
    const fetchFilm = e => {
        const { id } = props
        axios.get("http://swapi.dev/api/films")
        .then(response => {
            let jsonResponse = response.data.results;
            setFilm({
                selected_film: jsonResponse[id]
            })
        })
        .catch(console.log("These aren't the droids you're looking for"))
    }
    return (
        <div>
            <h2>Title: { film.selected_film.title }</h2>
            <h2>Opening Crawl: { film.selected_film.opening_crawl }</h2>
            <h2>Director: { film.selected_film.director }</h2>
            <h2>Producer: { film.selected_film.producer }</h2>
            <h2>Release Date: { film.selected_film.release_date }</h2>
        </div>
    )
}

export default FilmComponent
