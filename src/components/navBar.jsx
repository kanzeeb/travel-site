import React from 'react';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    return (
        <>
          <nav className="navBar collapsible collapsible--expanded">
            <span className="avatar nav__main">
           <img src='https://i.postimg.cc/qRKxppdx/board.png' alt="logo travel" />
            <span className="avatar__description ">TRAVEL solutions</span>
            
            </span>
            
            <ul className="nav__list collapsible__content">
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