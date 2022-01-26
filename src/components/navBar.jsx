import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaPlaneDeparture } from 'react-icons/fa';
const NavBar = () => {
  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive); 
   };
    return (
        <>
          <nav className="navBar collapsible collapsible--expanded">
            <span className="avatar nav__main">
            <span><FaPlaneDeparture className='icon icon--white'/></span>
            <span className="avatar__description ">TRAVEL solutions</span>            
            </span>
            <span><FaBars className='icon icon--white item__deskhide' onClick={ToggleClass}/></span>
            <ul className={`nav__list ${isActive ? "item__hide" : null}`}>                
                <li className="nav__item">
                <NavLink className='nav__a' to='/inicio'>
                inicio
                </NavLink>
                </li>
                <li className="nav__item">
                <NavLink className='nav__a' to='/globalizadores'>
                globalizadores
                </NavLink>
                </li>
                <li className="nav__item">
                <NavLink className='nav__a' to='/aerolineas'>
                aerolíneas
                </NavLink>
                </li>
                <li className="nav__item">
                <NavLink className='nav__a' to='/online-travel-agency'>
                online trevel agency
                </NavLink>
                </li>
                <li className="nav__item">
                <NavLink className='nav__a' to='/guias-viaje'>
                guías de viaje
                </NavLink>
                </li>
                <li className="nav__item">
                <NavLink className='nav__a' to='/agencias-viaje'>
                agencias de viaje
                </NavLink>
                </li>                  
            </ul>
           </nav>
        </>
    )
}

export default NavBar;