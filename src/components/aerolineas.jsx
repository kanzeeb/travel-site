import React, { Component } from "react";
import { getAerolineas, getAerolineasInter, getAerolineasInterBajoCosto } from "../services/fakeAerolineas";

class Aerolinea extends Component {
    state = {
        aerolineasNacionales: [],
        aerolineasInterBajoCosto: [],
        aerolineasInter: []
    }
    componentDidMount() {
        this.setState({aerolineasNacionales:getAerolineas(), aerolineasInterBajoCosto:getAerolineasInterBajoCosto(), aerolineasInter:getAerolineasInter()})
    }
    render() {
    return(
        <>
            <section className="block__B container">
                <article className="grid grid--2-cols feature">
                    <div>
                        <h3 className="header card__A">Aerolíneas - Boletos de Avion</h3><br/>
                        <p className="feature__text">
                        Los Boletos de Avión desde la perspectiva del viajero esencialmente se clasifican en Vuelos Nacionales y Vuelos Internacionales, los primeros habitualmente son distribuidos por Aerolíneas de Bajo Costo cuyo modelo de negocio es el optimizar sus ingresos controlando sus gastos, este es por ejemplo el caso de Volaris e Interjet quienes NO ofrecen sus productos y servicios a mercado abierto utilizando un Globalizador o GDS.
                        <br></br><br></br>
                        La segunda categoría es la de Vuelos Internacionales, en esta es necesaria la integración con GDSs para que las aerolíneas puedan ofrecer sus Vuelos y Conexiones a nivel global, en México este sería el caso de Aeromexico, quien ofrece Boletos de Avión y sus Rutas Nacionales e Internacionales a nivel global.
                        </p>
                        
                    </div>
                    <picture className="grid__image">
                        <source
                        type="image/png"
                         srcSet="https://i.postimg.cc/hGMrBgcQ/sprite2.png" />
                         <img className="media__image" src="https://i.postimg.cc/hGMrBgcQ/sprite2.png" alt="easy info" />
                    </picture>
                </article>            
                </section>
            
               
                <section className="grid__brandsSection container">
                    <div className="grid__brands">
                        <div className="grid__header header__brands"><br></br><br></br>Aerolíneas Nacionales:</div>
                        {this.state.aerolineasNacionales.map(aerolineNacional => (
                           <div key={aerolineNacional._id} className="grid__brandsBox">
                              <a href={aerolineNacional.siteURL}target="_blank"><img src={aerolineNacional.imageURL} alt={aerolineNacional.altID} /></a>
                           </div>
                        ))}
                    </div>        
                </section>
                <section className="grid__brandsSection container">
                    <div className="grid__brands">
                        <div className="grid__header header__brands"><br></br><br></br>Aerolíneas Internacionales:</div>
                        {this.state.aerolineasInter.map(aerolineaInter => (
                           <div key={aerolineaInter._id} className="grid__brandsBox">
                              <a href={aerolineaInter.siteURL}target="_blank"><img src={aerolineaInter.imageURL} alt={aerolineaInter.altID} /></a>
                           </div>
                        ))}
                    </div>        
                </section>
                <section className="grid__brandsSection container">
                    <div className="grid__brands">
                        <div className="grid__header header__brands"><br></br><br></br>Aerolíneas Internacionales - Bajo Costo:</div>
                        {this.state.aerolineasInterBajoCosto.map(aerolineaInterBajoCosto => (
                           <div key={aerolineaInterBajoCosto._id} className="grid__brandsBox">
                              <a href={aerolineaInterBajoCosto.siteURL}target="_blank"><img src={aerolineaInterBajoCosto.imageURL} alt={aerolineaInterBajoCosto.altID} /></a>
                           </div>
                        ))}
                    </div>        
                </section>
        </>
    );}
};

export default Aerolinea;