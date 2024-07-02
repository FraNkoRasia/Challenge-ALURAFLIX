
import React from 'react';
import Cartelera from '../Cartelera/Cartelera';
import './Home.css'; // Importa el archivo CSS donde tienes los estilos

export default function Home({ generoPeli, peliculas, borrarPelicula, handleOpenModal }) {
  return (
    <section className="home-section">
      {generoPeli.map((cartelera, index) => (
        <Cartelera key={index} datos={cartelera} peliculas={peliculas} onBorrar={borrarPelicula} onEdit={handleOpenModal} />
      ))}

      <hr className="linea" />
      <div className="leyenda">Fin del Contenido</div>
      <hr className="linea" />
    </section>
  );
}