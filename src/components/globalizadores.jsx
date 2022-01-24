import React from "react";

const Global = () => {
    return(
        <>
            <section className="block__B container">
                <article className="grid grid--2-cols feature">
                    <div>
                        <h3 className="header card__A">Globalizadores </h3>
                        <p className="feature__text">
                            Los Globalizadores o GDS (Global Distribution System) por sus siglas en inglés son los sistemas de comercialización por excelencia de Boletos de Avión, estos sistemas concentran la oferta de Destinos Turísticos de casi todas las Aerolíneas del planeta.<br/><br/>
                            La función principal de los Globalizadores o GDS es centralizar la operativa de Aerolíneas Nacionales e Internacionales en un solo sistema; la idea es poner a disposición de millones de usuarios la oferta de Boletos de Avión y Destinos Turísticos de forma sencilla y ordenada para que el usuario sea capaz de:
                        </p>
                        <ul>
                            <li className="feature__text">
                               Comprar Boletos de Avión de una o varias aerolíneas para Viajar en Vuelos Directos, Vuelos Multi Destino o Vuelos Multi Aerolínea
                            </li>
                            <li className="feature__text">
                               Adquirir Boletos de Avión para Vuelos Nacionales o Vuelos Internacionales
                            </li>
                            <li className="feature__text">
                               Seleccionar los Boletos de Avión con Tarifas mas Bajas o con horarios de su conveniencia
                            </li>
                            <li className="feature__text">
                               Seleccionar la Aerolínea de su preferencia
                            </li>
                            <li className="feature__text">
                               Adquirir Boletos de Avión para cualquier fecha del año
                            </li>
                        </ul>
                    </div>
                    <picture className="grid__image">
                        <source
                        type="image/png"
                         srcset="https://i.postimg.cc/Dz7gHmkK/sprite.png" />
                         <img className="media__image" src="https://i.postimg.cc/Dz7gHmkK/sprite.png" alt="easy info" />
                    </picture>
                </article>            
                </section>
            
               
                <section className="grid__brandsSection container">
                    <div className="grid__brands">
                        <div className="grid__header header__brands">Los globalizadores más importantes del planeta son:</div>
                        <div className="grid__brandsBox">
                            <img src="https://i.postimg.cc/XvzbQrXs/amadeus.jpg" alt="easy info" />
                        </div>
                        <div className="grid__brandsBox">
                            <img src="https://i.postimg.cc/0ySD8S1w/sabre.jpg" alt="easy info" />
                        </div>
                        <div className="grid__brandsBox">
                            <img src="https://i.postimg.cc/q7dng7pZ/travelport.jpg" alt="easy info" />
                        </div>
                    </div>        
                </section>
        </>
    );
};

export default Global;