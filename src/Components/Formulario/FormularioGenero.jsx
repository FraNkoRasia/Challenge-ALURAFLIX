import React, { useState } from 'react';
import '../Formulario/FormularioGenero.css';

export default function FormularioGenero({ agregarGenero, eliminarGenero, generoPeli }) {
    const [nuevoGenero, setNuevoGenero] = useState('');
    const [generoAEliminar, setGeneroAEliminar] = useState('');
    const [mensaje, setMensaje] = useState('');

    const manejarEnvioAgregar = (e) => {
        e.preventDefault();
        const generoEnMayusculas = nuevoGenero.toUpperCase();
        agregarGenero({ titulo: generoEnMayusculas });
        setNuevoGenero('');
        setMensaje(`El género "${generoEnMayusculas}" se ha agregado con éxito.`);
        setTimeout(() => setMensaje(''), 3000);
    };

    const manejarEnvioEliminar = (e) => {
        e.preventDefault();
        eliminarGenero(generoAEliminar);
        setMensaje(`El género "${generoAEliminar}" se ha eliminado con éxito.`);
        setGeneroAEliminar('');
        setTimeout(() => setMensaje(''), 3000);
    };

    return (
        <section className='formulario'>
            <div className='titulo-subtitulo'>
                <h1>AGREGUE UN NUEVO GÉNERO</h1>
                <p>Complete el formulario para crear un nuevo género</p>
            </div>
            <form className='nuevoGenero' onSubmit={manejarEnvioAgregar}>
                <div className='horizontal-fields'>
                    <input
                        type="text"
                        placeholder="Nombre del género"
                        value={nuevoGenero}
                        onChange={(e) => setNuevoGenero(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Guardar</button>
            </form>

            <div className='titulo-subtitulo'>
                <h1>ELIMINE UN GÉNERO</h1>
                <p>Seleccione un género para eliminar</p>
            </div>
            <form className='eliminarGenero' onSubmit={manejarEnvioEliminar}>
                <div className='horizontal-fields'>
                    <select
                        value={generoAEliminar}
                        onChange={(e) => setGeneroAEliminar(e.target.value)}
                        required
                    >
                        <option value='' disabled>Seleccione un género</option>
                        {generoPeli.map((genero, index) => (
                            <option key={index} value={genero.titulo}>{genero.titulo}</option>
                        ))}
                    </select>
                </div>
                <button type="submit">Eliminar</button>
            </form>

            {mensaje && <div className="mensaje-exito">{mensaje}</div>}
        </section>
    );
}


