import React from 'react'

const CategoryComponent = ( props ) => {
    const { changeHandler, category, labelStyle, selectStyle } = props
    return (
        <div>
            <label htmlFor="category" style={ labelStyle } value={ category }><h1>Search for:</h1></label>
            <select onClick ={ changeHandler } name="category" style={ selectStyle }>
                <option value="people">People</option>
                <option value="film">Films</option>
                <option value="species">Species</option>
                <option value="vehicle">Vehicles</option>
                <option value="starship">Starships</option>
                <option value="planet">Planets</option>
            </select>
        </div>
    )
}

export default CategoryComponent
