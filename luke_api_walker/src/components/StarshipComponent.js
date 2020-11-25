import axios from 'axios';
import React, { useEffect, useState } from 'react'

const StarshipComponent = ( props ) => {
    const [ starship, setStarship ] = useState({
        this_starship: ""
    })

    useEffect(() => {
        fetchStarship();
    }, [])

    const fetchStarship = e => {
        const { id } = props
        axios.get("http://swapi.dev/api/starships")
        .then(response => {
            let jsonResponse = response.data.results;
            setStarship({
                this_starship: jsonResponse[id]
            })
        })
        .catch(console.log("These aren't the droids you're looking for"))
    }
    return (
        <div>
            <h2>Name: { starship.this_starship.name }</h2>
            <h2>Manufacturer: { starship.this_starship.manufacturer }</h2>
            <h2>Cost in Credits: { starship.this_starship.cost_in_credits }</h2>
            <h2>Max Atmosphering Speed: { starship.this_starship.max_atmosphering_speed }</h2>
            <h2>Cargo Capacity: { starship.this_starship.cargo_capacity }</h2>
        </div>
    )
}

export default StarshipComponent;
