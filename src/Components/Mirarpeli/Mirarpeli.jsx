import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { FaRegClock } from "react-icons/fa";
import './Mirarpeli.css';

export default function Mirarpeli() {
    const videoRef = useRef(null);
    const { id } = useParams();
    const [pelicula, setPelicula] = useState(null);

    useEffect(() => {
        const fetchPelicula = async () => {
            try {
                const response = await fetch(`https://my-json-server.typicode.com/FraNkoRasia/fake-json-flix/peliculas/${id}`);
                const data = await response.json();
                setPelicula(data);
            } catch (error) {
                console.error("Error al recuperar la película:", error);
            }
        };

        fetchPelicula();
    }, [id]);

    return (
        <div className="mirarpeli-container">
            <div className="description">
                <h1 className="title">{pelicula?.titulo}</h1>

                <p className="details">Duracion:<FaRegClock />{pelicula?.duracion}</p>
                <p className="details">Genero: {pelicula?.genero}</p>
                <p className="details">Director: {pelicula?.director}</p>
                <p className="details">Actores: {pelicula?.actores}</p>
                <p className="details">Sinopsis: {pelicula?.sinopsis}</p>
            </div>
            {pelicula && (
                <iframe
                    ref={videoRef}
                    src={pelicula.video}
                    title="YouTube video player"
                    className="video-iframe"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            )}
        </div>
    );
}
