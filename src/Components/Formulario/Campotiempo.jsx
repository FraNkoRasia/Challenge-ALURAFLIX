
import React from 'react';
import './Campotiempo.css'; // Importar el archivo CSS

export default function Campotiempo(props) {
  const manejarCambioHoras = (e) => {
    const horas = parseInt(e.target.value, 10);
    const minutos = props.valor ? parseInt(props.valor.split('min')[0].split('h ')[1] ?? 0, 10) : 0;
    const nuevoValor = `${horas}h ${minutos}min`;
    props.actualizarTiempo(nuevoValor);
  };

  const manejarCambioMinutos = (e) => {
    const horas = props.valor ? parseInt(props.valor.split('h')[0], 10) : 0;
    const minutos = parseInt(e.target.value, 10);
    const nuevoValor = `${horas}h ${minutos}min`;
    props.actualizarTiempo(nuevoValor);
  };

  // Crear opciones para las horas (de 0 a 23)
  const opcionesHoras = Array.from({ length: 24 }, (_, index) => (
    <option key={index} value={index}>{index}</option>
  ));

  // Crear opciones para los minutos (de 0 a 59)
  const opcionesMinutos = Array.from({ length: 60 }, (_, index) => (
    <option key={index} value={index}>{index}</option>
  ));

  return (
    <div className="campotiempo">
      <label htmlFor="descripcion">{props.titulo}</label>

      <div className="campotiempo-flex">
        <div className="campotiempo-seccion">
          <span className="campotiempo-texto">Horas</span>
          <select value={props.valor ? props.valor.split('h')[0] ?? '0' : '0'} onChange={manejarCambioHoras}>
            {opcionesHoras}
          </select>
        </div>
        <div className="campotiempo-separador">:</div>
        <div className="campotiempo-seccion">
          <span className="campotiempo-texto">Minutos</span>
          <select value={props.valor ? props.valor.split('h ')[1]?.split('min')[0] ?? '0' : '0'} onChange={manejarCambioMinutos}>
            {opcionesMinutos}
          </select>
        </div>
      </div>
    </div>
  );
}
