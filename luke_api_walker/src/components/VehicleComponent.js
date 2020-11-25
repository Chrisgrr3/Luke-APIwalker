import axios from 'axios';
import React, { useEffect, useState } from 'react'

const VehicleComponent = ( props ) => {
    const [ vehicle, setVehicle ] = useState({
        this_vehicle: ""
    })

    const {id} = props

    useEffect(() => {
        fetchVehicle();
    }, [vehicle])

    const fetchVehicle = e => {
        axios.get("http://swapi.dev/api/vehicles")
        .then(response => {
            let jsonResponse = response.data.results
            setVehicle({
                this_vehicle: jsonResponse[id]
            })
        })
        .catch(console.log("These aren't the droids you're looking for"))
    }
    return (
        <div>
            <h2>Name: { vehicle.this_vehicle.name }</h2>
            <h2>Consumables: { vehicle.this_vehicle.consumables }</h2>
            <h2>Manufacturer: { vehicle.this_vehicle.manufacturer }</h2>
            <h2>Cost in Credits: { vehicle.this_vehicle.cost_in_credits }</h2>
            <h2>Max Atmosphering Speed: { vehicle.this_vehicle.max_atmosphering_speed }</h2>
        </div>
    )
}

export default VehicleComponent;
