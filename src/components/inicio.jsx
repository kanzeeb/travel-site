import React from 'react';
import Cards from './cards';
import Media from './media';
const Inicio = () => {
    return(
        <>
            <div className='main__container'>
                <Cards />
                <Media />
            </div>
        </>
    );
};

export default Inicio;