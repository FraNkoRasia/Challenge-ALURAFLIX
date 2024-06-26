import React from 'react';
import './Cartelera.css';
import Pelicula from '../Pelicula/Pelicula';

export default function Cartelera({ datos, peliculas, onBorrar, onEdit }) {
  const { titulo } = datos;
  const peliculasFiltradas = peliculas.filter(pelicula => pelicula.cartelera === titulo);

  return (
    <div>
      <div className='cartelera'>
        <h3 className='titulo-genero'>{titulo}</h3>
      </div>
      <div className='peliculas-container'>
        <div className='peli'>
          {peliculasFiltradas.map((pelicula, index) => (
            <Pelicula
              key={index}
              datos={pelicula}
              onBorrar={() => onBorrar(pelicula.id)}
              onEdit={onEdit}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
