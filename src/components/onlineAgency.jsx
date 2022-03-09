import React, { Component } from 'react';
import {getOTAs} from '../services/fakeOTA';

class OnlineAgency extends Component {
    state = {
        otas: []
    };

    componentDidMount() {
      this.setState({otas:getOTAs()})
    };
    render(){
    return(
        <>
            <section className="block__B container">
                <article className="grid grid--2-cols feature">
                    <div>
                        <h3 className="header card__A">ota - Online travel agency </h3><br/>
                        <p className="feature__text">
                        Las Agencias de Viaje Online o también conocidas como OTAs por sus siglas en Inglés son promotoras de Destinos Turísticos y Boletos de Avión que llevan a cabo sus ventas por Internet, estos organismos ofrecen sus Productos y Servicios Turísticos los 7 días de la semana las 24 horas del día.
                        </p>
                        <p className="feature__text">La mayoría de las OTAs distribuyen un sin fin de Productos Turísticos como:</p>
                        <ul>
                            <li className="feature__text">
                            Boletos de Avión Nacionales e Internacionales
                            </li>
                            <li className="feature__text">
                            Hoteles Nacionales y Extranjeros
                            </li>
                            <li className="feature__text">
                            Renta de Autos
                            </li>
                            <li className="feature__text">
                            Paquetes de Viaje
                            </li>
                            <li className="feature__text">
                            Cruceros
                            </li>
                            <li className="feature__text">
                            Tours y Circuitos
                            </li>
                            <li className="feature__text">
                            Traslados y Seguros
                            </li>
                        </ul>
                        <p className="feature__text">
                            Las Agencias de Viaje Online ofrecen la posibilidad de comprar Boletos de Avión o Cuartos de Hotel pagando con Tarjetas de Crédito Bancarias nacionales y extranjeras, esto permite tener la posibilidad de adquirir servicios de Viaje a Mensualidades SIN Intereses, a cuotas fijas o precios preferenciales.
                            
                            Una OTA también se caracteriza por ofrecer soluciones de pago confiables y seguras, esto les permite promover sus productos y servicios a todo el planeta. Dentro de las más importantes podemos encontrar:
                        </p>
                    </div>
                    <picture className="grid__image">
                        <source
                        type="image/png"
                        srcSet="https://i.postimg.cc/T15qgDmn/sprite3.png" />
                         <img className="media__image" src="https://i.postimg.cc/T15qgDmn/sprite3.png" alt="easy info" />
                    </picture>
                </article>            
                </section>
            
               
                <section className="grid__brandsSection container">
                    <div className="grid__brands">
                    {this.state.otas.map(ota => (
                           <div key={ota._id} className="grid__brandsBox">
                              <a href={ota.siteURL}target="_blank"><img src={ota.imageURL} alt={ota.altID} /></a>
                           </div>
                    ))}                        
                    </div>        
                </section>
        </>
    );}
};

export default OnlineAgency;