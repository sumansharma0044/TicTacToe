import React from 'react';
import './Square.css'

const Square = ({id, className, state}) => {
    // console.log("props >>", props.id, props.className);
  return (
    <div className= {`square-container ${className} ${state === 'X' ? "X-color" : "Y-color"}`} id={id}>
        {state}
    </div>  
  )
}

export default Square