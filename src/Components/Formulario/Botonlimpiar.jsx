import React from 'react';

export default function Botonlimpiar(props) {
     return (
        <div>
            <button type="button" onClick={props.onClick}>{props.texto}</button>
        </div>
    );
}
