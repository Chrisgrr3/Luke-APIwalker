import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PlanetComponent = ( props ) => {
    const [ planet, setPlanet ] = useState({
        this_planet: ""
    }) 
    useEffect(() => {
        fetchPlanet();
    }, [planet])

    const fetchPlanet = e => {
        const {id} = props
        axios.get("http://swapi.dev/api/planets")
        .then(response => {
            let jsonResponse = response.data.results;
            setPlanet({
                this_planet: jsonResponse[id]
            })
        })
        .catch(console.log("These aren't the droids you're looking for"))
    }
    return (
        <div>
            <h2>Name: { planet.this_planet.name }</h2>
            <h2>Climate: { planet.this_planet.climate }</h2>
            <h2>Gravity: { planet.this_planet.gravity }</h2>
            <h2>Terrain: { planet.this_planet.terrain }</h2>
            <h2>Population: { planet.this_planet.population }</h2>
        </div>
    )
}

export default PlanetComponent;
