import React from 'react';
import './Pelicula.css';
import editar from '/Image/editar.png';
import eliminar from '/Image/eliminar.png';
import { FaRegClock } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Pelicula({ datos, onBorrar, onEdit }) {
  const { id, titulo, imagen, duracion } = datos;

  const manejarBorrado = () => {
    onBorrar(id);
  };

  const manejarEdicion = () => {
    onEdit(datos);
  };

  const truncarTexto = (texto, longitudMaxima) => {
    return texto.length > longitudMaxima ? texto.slice(0, longitudMaxima) + '...' : texto;
  };

  return (
    <div className='pelicula'>
      <div className='encabezado'>
        <Link to={`/mirarpeli/${id}`}>
          <img className='imagen-peli' src={imagen} alt={titulo} />
        </Link>
        <div className='info-peli'>
          <h4>{truncarTexto(titulo, 18)}</h4>
          <p><FaRegClock /> {duracion}</p>
        </div>
        <div className='iconos'>
          <div className='accion' onClick={manejarBorrado}>
            <img src={eliminar} alt="eliminar" />
            <p>BORRAR</p>
          </div>
          <div className='accion' onClick={manejarEdicion}>
            <img src={editar} alt="editar" />
            <p>EDITAR</p>
          </div>
        </div>
      </div>
    </div>
  );
}
