import React from 'react';
import './Campoduracion.css'; // Importar el archivo CSS

export default function Campoduracion(props) {
  const manejarCambioHoras = (e) => {
    const horas = parseInt(e.target.value, 10);
    const minutos = props.valor ? parseInt(props.valor.split('min')[0].split('h ')[1] ?? 0, 10) : 0;
    const nuevoValor = `${horas}h ${minutos}min`;
    props.actualizarDuracion(nuevoValor);
  };

  const manejarCambioMinutos = (e) => {
    const horas = props.valor ? parseInt(props.valor.split('h')[0], 10) : 0;
    const minutos = parseInt(e.target.value, 10);
    const nuevoValor = `${horas}h ${minutos}min`;
    props.actualizarDuracion(nuevoValor);
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
    <div className="campoduracion">
      <label htmlFor="descripcion">{props.titulo}</label>

      <div className="campoduracion-flex">
        <div className="campoduracion-seccion">
          <span className="campoduracion-texto">Horas</span>
          <select value={props.valor ? props.valor.split('h')[0] ?? '0' : '0'} onChange={manejarCambioHoras}>
            {opcionesHoras}
          </select>
        </div>
        <div className="campoduracion-separador">:</div>
        <div className="campoduracion-seccion">
          <span className="campoduracion-texto">Minutos</span>
          <select value={props.valor ? props.valor.split('h ')[1]?.split('min')[0] ?? '0' : '0'} onChange={manejarCambioMinutos}>
            {opcionesMinutos}
          </select>
        </div>
      </div>
    </div>
  );
}
