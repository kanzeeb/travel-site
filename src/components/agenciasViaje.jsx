import React from 'react';

const AgenciasViaje = () => {
    return (
        <>
            <section className="block__B container">
                <article className="grid grid--2-cols feature">
                    <div>
                        <h3 className="header card__A">Agencias de viaje </h3>
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
                            Asociación Nacional de Agencias de Viaje (ANAV)
                            </li>
                            <li className="feature__text">
                            Consejo Nacional Empresarial Turístico (CNET)
                            </li>
                            <li className="feature__text">
                            Abastecedores Turísticos (AMAIT)
                            </li>
                            <li className="feature__text">
                            Asociación Mexicana de Desarrolladores Turísticos (AMDETUR)
                            </li>
                            <li className="feature__text">
                            Asociación Mexicana de Hoteles y Moteles (AMHM)
                            </li>
                            <li className="feature__text">
                            Confederación Nacional de Asociaciones de Agencias de Viajes de México (CONAAV)
                            </li>
                            <li className="feature__text">
                            Confederación de Cámaras Nacionales de Comercio, Servicios y Turismo (CONCANACO-SERVYTUR)
                            </li>
                            <li className="feature__text">
                            Confederación Nacional Turística (A.C.,CNT)
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
                        <div className="grid__brandsBox">
                            <img src="https://i.postimg.cc/mgKJ07QZ/auto-Travel.jpg" alt="easy info" />
                        </div>
                        <div className="grid__brandsBox">
                            <img src="https://i.postimg.cc/hvKH2gV9/blueSky.jpg" alt="easy info" />
                        </div>
                        <div className="grid__brandsBox">
                            <img src="https://i.postimg.cc/4ywjMM1j/bojorque-Viajes.jpg" alt="easy info" />
                        </div>
                        <div className="grid__brandsBox">
                            <img src="https://i.postimg.cc/kMcrB6dw/ibero-Mexico.jpg" alt="easy info" />
                        </div>
                        <div className="grid__brandsBox">
                            <img src="https://i.postimg.cc/Hssq5YYm/mega-Travel.jpg" alt="easy info" />
                        </div>
                        <div className="grid__brandsBox">
                            <img src="https://i.postimg.cc/wTfSQCMm/tornare-Travel.jpg" alt="easy info" />
                        </div>
                        <div className="grid__brandsBox">
                            <img src="https://i.postimg.cc/2S1gc0LX/viajes-Fama.jpg" alt="easy info" />
                        </div>
                        <div className="grid__brandsBox">
                            <img src="https://i.postimg.cc/bvbW8dTx/viajes-Real.jpg" alt="easy info" />
                        </div>
                        <div className="grid__brandsBox">
                            <img src="https://i.postimg.cc/bJhMv8CK/viajes-Turquesa.jpg" alt="easy info" />
                        </div>
                    </div>        
                </section>
        </>
    );
};

export default AgenciasViaje;