import React, { useEffect, useState } from 'react'
import axios from 'axios';

const SpeciesComponent = ( props ) => {
    const [ species, setSpecies ] = useState({
        this_species: ""
    })
    useEffect(() => {
        fetchSpecies();
    }, [species])

    const fetchSpecies = e => {
        const {id} = props
        axios.get("http://swapi.dev/api/species")
        .then(response => {
            let jsonResponse = response.data.results;
            setSpecies({
                this_species: jsonResponse[id]
            })
        })
        .catch(console.log("These aren't the droids you're looking for"))
    }
    return (
        <div>
            <h2>Species Name: { species.this_species.name }</h2>
            <h2>Classification: { species.this_species.classification }</h2>
            <h2>Designation: { species.this_species.designation }</h2>
            <h2>Skin Colors: { species.this_species.skin_colors }</h2>
            <h2>Average Lifespan: { species.this_species.average_lifespan }</h2>
        </div>
    )
}

export default SpeciesComponent;
