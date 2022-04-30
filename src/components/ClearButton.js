import React from "react";
import '../styles/ClearButton.css'

const ClearButton = (props) => (
  <button 
    className='clear-button button-container'
    onClick={props.manejarClear}  
  >
    {props.children}
  </button>
)

export default ClearButton