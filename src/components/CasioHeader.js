import React from "react";
import CasioLogo from '../imgs/Casio.png';
import '../styles/CasioHeader.css'

function CasioHeader() {
  return (
    <div className='container'>
      <img 
        src={CasioLogo}
        className='logo'
        alt='Logo de Casio' 
      />
      <div className='solar'>
        <span></span>
        <span className='border-yellow'></span>
        <span className='border-yellow'></span>
        <span className='border-yellow'></span>
      </div>
      
    </div>

  )
}


export default CasioHeader