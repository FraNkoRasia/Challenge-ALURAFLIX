import { useState } from 'react'
import React from 'react'

export default function CampoTexto(props) {

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }
    return (
        <div>
            <label htmlFor="titulo">{props.titulo}</label>
            <input id="titulo" name="titulo" type="text"
                placeholder={props.placeholder}
                required={props.required}
                value={props.valor}
                onChange={manejarCambio} />
        </div>
    )
}
