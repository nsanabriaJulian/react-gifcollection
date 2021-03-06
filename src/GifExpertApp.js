import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = props => {

    const [categories, setCategories] = useState(['']);

    // const handleAdd = () => {
    //     //setCategories( [...categories, 'HunterXHunter'] );
    //     setCategories( cats => [ ...cats, 'HunterXHunter'] );
    // }

    return (
        <>
           <h2>Gif Collection - Busca tu Gif!</h2>
           <h3> Ingresa el nombre del gif que deseas buscar </h3>
           <AddCategory setCategories={ setCategories } />
           <hr /> 
           
           {/* <button onClick = { handleAdd }> Agregar </button> */}

           <ol>
               {
                   categories.map( category => (
                        <GifGrid 
                        key={ category }
                        category={ category } />
                   ))
                        
               }
           </ol>
        </>
    )
};

export default GifExpertApp;


