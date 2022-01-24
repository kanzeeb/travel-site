import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
const Cards = () => {
    return (
        <div >
            <div className="box">
                <div className="card card__header"> 
                   
                        <NavLink className='nav__a' to='/globalizadores'>
                            <div className="card__boxA">
                                <img src="https://i.postimg.cc/Dz7gHmkK/sprite.png" width="100%" />
                            </div>
                            <div className="card__box_text card__A">           
                                 Los Globalizadores son los sistemas de comercialización por excelencia de Boletos de Avión...
                            </div>
                        </NavLink>           
                                                               
                </div>  

                <div className="card card__header">                    
                    <NavLink className='nav__a' to='/aerolineas'>
                            <div className="card__boxB">
                                <img src="https://i.postimg.cc/hGMrBgcQ/sprite2.png" width="100%" />
                            </div>
                            <div className="card__box_text card__B">           
                            Los Boletos de Avión desde la perspectiva del viajero esencialmente se clasifican en Vuelos Nacionales y Vuelos Internacionales...
                            </div>
                    </NavLink> 
                </div>

                <div className="card card__header">                    
                    <NavLink className='nav__a' to='/online-travel-agency'>
                            <div className="card__boxA">
                                <img src="https://i.postimg.cc/T15qgDmn/sprite3.png" width="100%" />
                            </div>
                            <div className="card__box_text card__C">           
                            Las Agencias de Viaje Online son promotoras de Destinos Turísticos y Boletos de Avión...
                            </div>
                    </NavLink> 
                </div>

                <div className="card card__header">                    
                    <NavLink className='nav__a' to='/guias-viaje'>
                            <div className="card__boxB">
                                <img src="https://i.postimg.cc/850m7HF1/sprite4.png" width="100%" />
                            </div>
                            <div className="card__box_text card__C">           
                            Estos instrumentos son de gran utilidad cuando se desea conocer a fondo y con detalle las Atracciones Turísticas mas relevantes...
                            </div>
                    </NavLink> 
                </div>

                <div className="card card__header">                    
                    <NavLink className='nav__a' to='/agencias-viaje'>
                            <div className="card__boxA">
                                <img src="https://i.postimg.cc/HxxtWKkZ/sprite5.png" width="100%" />
                            </div>
                            <div className="card__box_text card__C">           
                            Las Agencias de Viaje son las Entidades Turísticas de Mayor tradición en el Sector Turismo...
                            </div>
                    </NavLink> 
                </div>
                
            </div>
        </div>
    );
};

export default Cards;