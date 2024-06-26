import React from 'react';
import Cartelera from '../Cartelera/Cartelera'; 

export default function Home({ carteleras, peliculas, borrarPelicula, handleOpenModal }) {
  return (
    <section>
      {carteleras.map((cartelera, index) => ( 
        <Cartelera key={index} datos={cartelera} peliculas={peliculas} onBorrar={borrarPelicula} onEdit={handleOpenModal} /> 
      ))}
    </section>
  );
}



