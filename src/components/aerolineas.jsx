import React from "react";

const Aerolinea = () => {
    return(
        <>
            <section className="block__B container">
                <article className="grid grid--2-cols feature">
                    <div>
                        <h3 className="header card__A">Aerolíneas - Boletos de Avion</h3>
                        <p className="feature__text">
                        Los Boletos de Avión desde la perspectiva del viajero esencialmente se clasifican en Vuelos Nacionales y Vuelos Internacionales, los primeros habitualmente son distribuidos por Aerolíneas de Bajo Costo cuyo modelo de negocio es el optimizar sus ingresos controlando sus gastos, este es por ejemplo el caso de Volaris e Interjet quienes NO ofrecen sus productos y servicios a mercado abierto utilizando un Globalizador o GDS.
                        <br></br><br></br>
                        La segunda categoría es la de Vuelos Internacionales, en esta es necesaria la integración con GDSs para que las aerolíneas puedan ofrecer sus Vuelos y Conexiones a nivel global, en México este sería el caso de Aeromexico, quien ofrece Boletos de Avión y sus Rutas Nacionales e Internacionales a nivel global.
                        </p>
                        
                    </div>
                    <picture className="grid__image">
                        <source
                        type="image/png"
                         srcset="https://i.postimg.cc/hGMrBgcQ/sprite2.png" />
                         <img className="media__image" src="https://i.postimg.cc/hGMrBgcQ/sprite2.png" alt="easy info" />
                    </picture>
                </article>            
                </section>
            
               
                <section className="grid__brandsSection container">
                    <div className="grid__brands">
                        <div className="grid__header header__brands"><br></br><br></br>Aerolíneas Nacionales:</div>
                        <div className="grid__brandsBox">
                            <img src="https://i.postimg.cc/G2d1WYWy/aeromexico.jpg" alt="easy info" />
                        </div>
                        <div className="grid__brandsBox">
                            <img src="https://i.postimg.cc/FRpQNzvn/interjet.jpg" alt="easy info" />
                        </div>
                        <div className="grid__brandsBox">
                            <img src="https://i.postimg.cc/3wgTf9ch/vivaaerobus.jpg" alt="easy info" />
                        </div>
                        <div className="grid__brandsBox">
                            <img src="https://i.postimg.cc/cCJGHW41/volaris.jpg" alt="easy info" />
                        </div>
                    </div>        
                </section>
                <section className="grid__brandsSection container">
                    <div className="grid__brands">
                        <div className="grid__header header__brands"><br></br><br></br>Aerolíneas Internacionales - Bajo Costo:</div>
                        <div className="grid__brandsBox">
                            <img src="https://i.postimg.cc/vT1MhMRq/air-Transat.jpg" alt="easy info" />
                        </div>
                        <div className="grid__brandsBox">
                            <img src="https://i.postimg.cc/DzBTKmnp/allegiant.jpg" alt="easy info" />
                        </div>
                        <div className="grid__brandsBox">
                            <img src="https://i.postimg.cc/x1VYvW65/easyJet.jpg" alt="easy info" />
                        </div>
                        <div className="grid__brandsBox">
                            <img src="https://i.postimg.cc/WzQVfKT2/frontier.jpg" alt="easy info" />
                        </div>
                        <div className="grid__brandsBox">
                            <img src="https://i.postimg.cc/v8jGB19p/jetBlue.jpg" alt="easy info" />
                        </div>
                        <div className="grid__brandsBox">
                            <img src="https://i.postimg.cc/ZKd4yTx0/porter.jpg" alt="easy info" />
                        </div>
                        <div className="grid__brandsBox">
                            <img src="https://i.postimg.cc/ht8nppwB/southwest.jpg" alt="easy info" />
                        </div>
                        <div className="grid__brandsBox">
                            <img src="https://i.postimg.cc/yNVH504S/spirit.jpg" alt="easy info" />
                        </div>
                        <div className="grid__brandsBox">
                            <img src="https://i.postimg.cc/tTJHRygq/suncountry.jpg" alt="easy info" />
                        </div>
                        <div className="grid__brandsBox">
                            <img src="https://i.postimg.cc/KjgSLNLC/sunwing.jpg" alt="easy info" />
                        </div>
                        <div className="grid__brandsBox">
                            <img src="https://i.postimg.cc/LhKdV135/virgin.jpg" alt="easy info" />
                        </div>
                        <div className="grid__brandsBox">
                            <img src="https://i.postimg.cc/44KmBR1R/wesJet.jpg" alt="easy info" />
                        </div>
                    </div>        
                </section>
        </>
    );
};

export default Aerolinea;