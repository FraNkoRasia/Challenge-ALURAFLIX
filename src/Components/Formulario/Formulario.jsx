import React, { useState, useEffect } from 'react';
import '../Formulario/Formulario.css';
import CampoTexto from './Campotexto';
import Listaopciones from './Listaopciones';
import Campotiempo from './Campotiempo';
import Botonguardar from './Botonguardar';
import Botonlimpiar from './Botonlimpiar';

export default function Formulario({ agregarPelicula, carteleras, pelicula, editarPelicula }) {
  const [titulo, actualizarTitulo] = useState("");
  const [imagen, actualizarImagen] = useState("");
  const [video, actualizarVideo] = useState("");
  const [cartelera, actualizarCartelera] = useState("");
  const [tiempo, actualizarTiempo] = useState("");

  useEffect(() => {
    if (pelicula) {
      actualizarTitulo(pelicula.titulo);
      actualizarImagen(pelicula.imagen);
      actualizarVideo(pelicula.video);
      actualizarCartelera(pelicula.cartelera);
      actualizarTiempo(pelicula.tiempo);
    }
  }, [pelicula]);

  const manejarEnvio = (e) => {
    e.preventDefault();
    let datosEnviar = {
      id: pelicula ? pelicula.id : null,
      titulo,
      imagen,
      video,
      cartelera,
      tiempo
    };

    if (pelicula) {
      editarPelicula(datosEnviar);
    } else {
      agregarPelicula(datosEnviar);
      console.log("PELICULA AGREGADA", datosEnviar)
      alert("Película agregada con éxito");
      limpiarFormulario();
    }
    // limpiarFormulario();
    // window.location.href = "/";
  };

  const limpiarFormulario = () => {
    actualizarTitulo("");
    actualizarImagen("");
    actualizarVideo("");
    actualizarCartelera("");
    actualizarTiempo("");
  };

  return (
    <section className='formulario'>
      <div className='titulo-subtitulo'>
        <h1>{pelicula ? "EDITAR VIDEO" : "NUEVO VIDEO"}</h1>
        <p>{pelicula ? "ACTUALIZA EL FORMULARIO PARA EDITAR LA TARJETA DE VIDEO" : "COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO"}</p>
      </div>
      <div className='titulo-crearTarjeta'>
        <hr />
        <h1>{pelicula ? "Editar Tarjeta" : "Crear Tarjeta"}</h1>
        <hr />
      </div>

      <form onSubmit={manejarEnvio}>
        <div className='horizontal-fields'>
          <CampoTexto
            titulo="Titulo"
            placeholder="Titulo del Video"
            required
            valor={titulo}
            actualizarValor={actualizarTitulo}
          />

          <Listaopciones
            titulo="Categoria"
            required
            valor={cartelera}
            actualizarCartelera={actualizarCartelera}
            carteleras={carteleras.map(cartelera => cartelera.titulo)}
          />
        </div>

        <div className='horizontal-fields'>
          <CampoTexto
            titulo="Imagen"
            placeholder="Link de la Imagen"
            required
            valor={imagen}
            actualizarValor={actualizarImagen}
          />

          <CampoTexto
            titulo="Video"
            placeholder="Link del Video"
            required
            valor={video}
            actualizarValor={actualizarVideo}
          />
        </div>

        <div className='tiempo'>
          <Campotiempo
            titulo="Duracion de la Pelicula"
            placeholder="¿De que se trata este video?"
            required
            valor={tiempo}
            actualizarTiempo={actualizarTiempo} />
        </div>

        <div className="button-container">
          <Botonguardar texto="GUARDAR" type="submit" />
          <Botonlimpiar texto="LIMPIAR" onClick={limpiarFormulario} />
        </div>
      </form>
    </section>
  );
}



