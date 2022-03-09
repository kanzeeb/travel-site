import React, { Component } from 'react';
import { getAgenciasDeViajes } from '../services/fakeAgenciasDeViaje'
class AgenciasViaje extends Component {
    state = {
        agenciasDeViaje: []
    };

    componentDidMount() {
      this.setState({agenciasDeViaje:getAgenciasDeViajes()})
    };
    render() {
    return (
        <>
            <section className="block__B container">
                <article className="grid grid--2-cols feature">
                    <div>
                        <h3 className="header card__A">Agencias de viaje </h3><br/>
                        <p className="feature__text">
                        Las Agencias de Viaje son las Entidades Turísticas de Mayor tradición en el Sector Turismo, por lo regular son pequeñas o medianas empresas PYME legalmente constituidas que como fuente de negocio promueven Destinos Turísticos Nacionales e Internacionales.
                        <br/> <br/> 
                        Una Agencia de Viaje tiene la capacidad de ofrecer a mercado abierto Boletos de Avión, Cuartos de Hotel, Paquetes y Traslados entre otros productos, estas Agencias se caracterizan por ofrecer medios de pago variados como Pagos con Tarjeta de Crédito, Depósitos Bancarios e inclusive pagos con Efectivo si es necesario, esta Facilidad de Pago le permite a los clientes pagar sus Viajes a Meses SIN Intereses con Tarjetas de Crédito Bancarias.
                        <br/> <br/>
                        Una Agencia de Viaje legalmente constituida debe darse de alta como cualquier otra empresa que desee emitir facturas y contar con un historial fiscal. En México existen diversas cámaras y asociaciones que promueven el crecimiento de las Agencias de Viaje, algunas y Asociaciones Turísticas reconocidas en el país son las siguientes:
                        <br/> <br/>
                        </p>
                        <ul>
                            <li className="feature__text">
                             <a href='https://anav.com.mx/' target='_blank' rel="noopener noreferrer">
                              Asociación Nacional de Agencias de Viaje (ANAV)
                             </a>
                            </li>
                            <li className="feature__text">
                             <a href='https://www.cnet.org.mx/' target='_blank' rel="noopener noreferrer">
                              Consejo Nacional Empresarial Turístico (CNET)
                             </a>
                            </li>
                            <li className="feature__text" >
                             <a href='https://www.amait.org.mx/' target='_blank' rel="noopener noreferrer">
                              Abastecedores Turísticos (AMAIT)
                             </a>
                            </li>
                            <li className="feature__text">
                             <a href='https://amdetur.org.mx/' target='_blank' rel="noopener noreferrer">
                              Asociación Mexicana de Desarrolladores Turísticos (AMDETUR)
                             </a>
                            </li>
                            <li className="feature__text">
                             <a href='https://www.amhm.org/' target='_blank' rel="noopener noreferrer">
                              Asociación Mexicana de Hoteles y Moteles (AMHM)            
                             </a>
                            </li>
                            <li className="feature__text">
                             <a href='https://www.viajesyturismoaldia.com/organismos-de-turismo/paises/mexico/confederacion-nacional-de-asociaciones-de-agencias-de-viajes-de-mexico-connav/' target='_blank'>
                              Confederación Nacional de Asociaciones de Agencias de Viajes (CONAAV)
                             </a>
                            </li>
                            <li className="feature__text">
                             <a href='https://www.concanaco.com.mx/' target='_blank' rel="noopener noreferrer">
                              Confederación de Cámaras Nacionales de Comercio, Servicios y Turismo (CONCANACO-SERVYTUR)
                             </a>
                            </li>
                            <li className="feature__text">
                             <a href='https://www.fematur.com/' target='_blank' rel="noopener noreferrer">
                             Federación Mexicana de Asociaciones Turísticas (FEMATUR)
                             </a>
                            </li>
                        </ul>
                        <p className="feature__text">
                        <br/> 
                        En adición a las cámaras es posible ubicar a cientos de Agencias de Viaje que operan de forma física en el país, estas agencias son puntos de venta turísticos y muchas de ellas son muy importantes en el desarrollo Turístico Nacional, algunas agencias de renombre son:
                        </p>
                    </div>
                    <picture className="grid__image">
                        <source
                        type="image/png"
                         srcset="https://i.postimg.cc/HxxtWKkZ/sprite5.png" />
                         <img className="media__image" src="https://i.postimg.cc/HxxtWKkZ/sprite5.png" alt="easy info" />
                    </picture>
                </article>            
                </section>
            
               
                <section className="grid__brandsSection container">
                    <div className="grid__brands">                        
                        {this.state.agenciasDeViaje.map(agenciaDeViaje => (
                           <div key={agenciaDeViaje._id} className="grid__brandsBox">
                              <a href={agenciaDeViaje.siteURL}target="_blank"><img src={agenciaDeViaje.imageURL} alt={agenciaDeViaje.altID} /></a>
                           </div>
                        ))}
                    </div>        
                </section>
        </>
    );}
};

export default AgenciasViaje;