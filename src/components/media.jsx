import React from "react";
import Fade from 'react-reveal/Fade';
const Media = () => {
    return (
    <section className="block container">
        <header className="block__header">
            <h2>Some dummy text</h2>
            <p>Lorem ipsum dolor, sit amet consecpisci!</p>
        </header>
        <article className="grid grid--2-cols feature">
            <div className="feature__content" data-aos="flip-left" data-aos-duration="delay_show">
                {/* <span className="icon-container">
                    <svg className="icon icon--primary">
                        <!-- <use xlink:href="./icons/data-sharing.png"></use> -->
                        <img src="https://i.postimg.cc/jj3DpRrM/easy-550.webp" alt="" >
                    </svg>
                </span> */}
                <Fade left>
                    <h3 className="feature__heading">Las Entidades Turísticas </h3>
                    <p className="feature__text">
                        desarrollan productos de Viaje para cualquier tipo de Turista, se enfocan principalmente a desarrollar soluciones de Venta, ya sea Online o Física, para poner a disposición de los viajeros los Productos y Servicios Turísticos que necesitan. Dichas entidades son el motor del Turismo Nacional y Mundial y sin duda son las entidades promotoras de Destinos Turísticos más relevantes.
                    </p>
                    <a href="#" className="link-arrow">Conozca más</a>
                </Fade>
            </div>           
            <Fade bottom><img className="hero__image" src="https://i.postimg.cc/HxxtWKkZ/sprite5.png" alt="info entidades turisticas" /></Fade>
           
        </article>
        <article className="grid grid--2-cols feature">
            <div className="feature__content" data-aos="flip-left" data-aos-duration="delay_show">
                {/* <span className="icon-container">
                    <svg className="icon icon--primary">
                        <img src="./icons/location.png" alt="" >
                    </svg>
                </span> */}
                <Fade right>
                    <h3 className="feature__heading">El Turismo Global</h3>
                    <p className="feature__text">
                        es sin duda uno de los modelos de negocio más complejos, pues para Viajar no solo es necesaria la integración de cientos de Aerolíneas a nivel global, sino también la integración de miles de Cadenas Hoteleras para ofrecer a millones de personas anualmente la posibilidad de Comprar Boletos de Avión, Reservar Hoteles e inclusive Rentar Autos o comprar Paquetes de Viaje.
                    </p>
                    <a href="#" className="link-arrow">Conozca más</a>
                </Fade>
            </div>            
            <Fade top><img className="hero__image" src="https://i.postimg.cc/hGMrBgcQ/sprite2.png" alt="info turismo global" /></Fade>            
        </article>
    </section>
    );
};

export default Media;