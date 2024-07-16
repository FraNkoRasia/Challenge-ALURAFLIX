import React from 'react';
import Cartelera from '../Cartelera/Cartelera';
import './Home.css';

export default function Home({ generoPeli, peliculas, borrarPelicula, handleOpenModal }) {
  const generosConPeliculas = generoPeli.filter(genero =>
    peliculas.some(pelicula => pelicula.cartelera === genero.titulo)
  );

  return (
    <section className="home-section">
      {peliculas.length === 0 ? (
        <div className="no-results-message">
          No se encontraron películas que coincidan con la búsqueda.
        </div>
      ) : (
        <>
          {generosConPeliculas.map((cartelera, index) => (
            <Cartelera key={index} datos={cartelera} peliculas={peliculas} onBorrar={borrarPelicula} onEdit={handleOpenModal} />
          ))}
        </>
      )}

      <hr className="linea" />
      <div className="leyenda">Fin del Contenido</div>
      <hr className="linea" />
    </section>
  );
}
