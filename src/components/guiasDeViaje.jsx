import React, { Component } from 'react';
import { getGuiasDeViajes } from '../services/fakeGuiasDeViaje';
class GuiaDeViaje extends Component {
    state = {
        guiasDeViaje: []
    };

    componentDidMount() {
      this.setState({guiasDeViaje:getGuiasDeViajes()})
    };
    render(){
    return(
        <>
            <section className="block__B container">
                <article className="grid grid--2-cols feature">
                    <div>
                        <h3 className="header card__A">Guias de Viaje </h3><br/><br/>
                        <p className="feature__text">
                        Estos instrumentos son de gran utilidad cuando se desea conocer a fondo y con detalle las Atracciones Turísticas mas relevantes, ya sea en Destinos Turísticos Extranjeros o Nacionales.
                        <br/> <br/> 
                        Estas Guías mostrarán al usuario el detalle de Tours, Museos, Sitios Históricos, Restaurantes y Atracciones Turísticas en casi cualquier localidad del planeta, por otro lado ofrecerán la posibilidad al viajero de ubicar a detalle Hoteles, Aeropuertos, Tiendas Departamentales, Bancos y otras Atracciones como si el viajero hubiera estado ahí con anterioridad.
                        <br/> <br/>
                        Las Guías turísticas habitualmente ofrecen los Top 10 o Top 20 Actividades Recreativas de la localidad, son sin duda una buena referencia eficiente que permite conocer los Destinos Turísticos a profundidad antes de viajar y que por el otro lado ofrecen al Viajero Internacional y Nacional contar con la certeza y seguridad de que sus Vacaciones de Verano, Invierno o estacionales serán un completo éxito.
                        <br/> <br/>
                        Algunas de las guías de viaje más populares de internet están a la disposición de cualquier Viajero que Busca Destinos Internacionales o Boletos de Avión, a continuación una lista de las Guías de Viaje más populares:
                        </p>
                    </div>
                    <picture className="grid__image">
                        <source
                        type="image/png"
                        srcSet="https://i.postimg.cc/850m7HF1/sprite4.png" />
                         <img className="media__image" src="https://i.postimg.cc/850m7HF1/sprite4.png" alt="easy info" />
                    </picture>
                </article>            
            </section>
            
            <section className="grid__brandsSection container">
                    <div className="grid__brands">                       
                        {this.state.guiasDeViaje.map(guiaDeViaje => (
                           <div key={guiaDeViaje._id} className="grid__brandsBox">
                              <a href={guiaDeViaje.siteURL}target="_blank"><img src={guiaDeViaje.imageURL} alt={guiaDeViaje.altID} /></a>
                           </div>
                        ))}
                    </div>        
            </section>

            <div className='feature block__B container'>
                <h2 className="feature__text">Podrás encontrar otras guías disponibles para diversos Destinos Turísticos en los siguientes vínculos:</h2>
                <br/> <br/>
                <ul>
                    <li className="feature__text">
                    <a href='https://www.turismomexico.es/' target='_blank'>Guía de Viaje México 1</a>
                    </li>
                    <li className="feature__text">
                    <a href='https://www.mundukos.com/mexico/' target='_blank'>Guía de Viaje México 2</a>
                    </li>
                    <li className="feature__text">
                    <a href='https://www.turismoteca.com/asia' target='_blank'>Guía de Viaje Asia 1</a>
                    </li>
                    <li className="feature__text">
                    <a href='https://www.guiaviajesa.com/asia/' target='_blank'>Guía de Viaje Asia 2</a>
                    </li>
                    <li className="feature__text">
                    <a href='https://www.guiaviajesa.com/inglaterra/' target='_blank'>Guía de Viaje Inglaterra 1</a>
                    </li>
                    <li className="feature__text">
                    <a href='https://www.visitbritain.com/es/es/inglaterra' target='_blank'>Guía de Viaje Inglaterra 2</a>
                    </li>
                    <li className="feature__text">
                    <a href='https://www.guiadealemania.com/' target='_blank'>Guía de Viaje Alemania 1</a>
                    </li>
                    <li className="feature__text">
                    <a href='https://www.viajeroscallejeros.com/guia-de-alemania/' target='_blank'>Guía de Viaje Alemania 2</a>
                    </li>
                    <li className="feature__text">
                    <a href='https://www.germany.travel/es/home.html' target='_blank'>Guía de Viaje Alemania 3</a>
                    </li>
                    <li className="feature__text">
                    <a href='https://franciaviajar.com/' target='_blank'>Guía de Viaje Francia 2</a>
                    </li>
                    <li className="feature__text">
                    <a href='https://www.paris.es/' target='_blank'>Guía de Viaje Francia 1</a>
                    </li>
                </ul>
            </div>

        </>
    );}
};

export default GuiaDeViaje;