import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    
    const { data:images, loading} = useFetchGifs( category );
    
    return (
        <>
            <h3 className="animate__animated animate__rollIn"> { category } </h3>

            { loading && <p className="animate__animated animate__flash">Loading</p> }

            <div className="card-grid">
                
                {
                    images.map( img  => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
                
            </div>
        </>
    )
}


// NOTA: useEffect me permite ejecutar cierto código de manera condicional
// (en éste caso hago que se ejecute 1 sola vez) 
// -> [] arreglo de dependencias, si mandamos los corchetes vacios el useEffect sólo se ejecutará 1 sola vez
// 
//  useEffect( () => {
//      getGifs();       ---> Hago que se ejecute solo cuando renderiza por primera vez.
//  }, [])

// useFetchGifs --> custom hook