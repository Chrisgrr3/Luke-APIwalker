import React from 'react'

const IdComponent = (props) => {
    const { changeHandler } = props;
    let Id_label = {
        position: "relative",
        left: "100px",
        bottom: "75px"
    }
    
    let Id_input = {
        position: "relative",
        left: "180px",
        bottom: "148px",
        height: "31px",
        width: "35px",
        padding: "15px",
        border: "1px solid white",
        backgroundColor: "#efefef",
        borderRadius: "5px",
        fontSize: "25px",
    }
    return (
        <div>
            <label htmlFor="id" style={ Id_label }><h1>ID:</h1></label>
            <input type="number" style={ Id_input } name="id" onChange={ changeHandler }/>
        </div>
    )
}

export default IdComponent
