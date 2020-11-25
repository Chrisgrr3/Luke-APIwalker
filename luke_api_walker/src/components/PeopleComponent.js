import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PeopleComponent = ( props) => {
    const [ person, setPerson ] = useState({
        this_person: ""
    })
    useEffect(() => {
        fetchPerson();
    }, [person])

    const fetchPerson = e => {
        const { id } = props
        axios.get("http://swapi.dev/api/people")
        .then(response => {
            let jsonResponse = response.data.results;
            setPerson({
                this_person: jsonResponse[id]
            })
        })
        .catch(console.log("These aren't the droids you're looking for"))
    }
    return (
        <div>
            <h2>Name: { person.this_person.name }</h2>
            <h2>Height: { person.this_person.height }</h2>
            <h2>Mass: { person.this_person.mass }</h2>
            <h2>Hair Color: { person.this_person.hair_color }</h2>
            <h2>Eye Color: { person.this_person.eye_color }</h2>
        </div>
    )
}

export default PeopleComponent;
