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
                const response = await fetch(`https://fake-api-json.vercel.app/peliculas/${id}`);
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
                <p className="details duration">
                    <span className="label">Duración:</span>
                    <FaRegClock />
                    {pelicula?.duracion}
                </p>

                <p className="details">
                    <span className="label">Género:</span> {pelicula?.genero}
                </p>
                <p className="details">
                    <span className="label">Director:</span> {pelicula?.director}
                </p>
                <p className="details">
                    <span className="label">Actores:</span> {pelicula?.actores}
                </p>
                <p className="details">
                    <span className="label">Sinopsis:</span> {pelicula?.sinopsis}
                </p>

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
