import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Formulario from './Components/Formulario/Formulario';
import Mirarpeli from './Components/Mirarpeli/Mirarpeli';
import Modal from './Components/Modal/Modal';
import Page404 from './Components/Page404/Page404';
import Footer from './Components/Footer/Footer';

function App() {
  const carteleras = [
    { titulo: "CIENCIA FICCIÓN" },
    { titulo: "ANIME" },
    { titulo: "ACCIÓN" }
  ];

  const [peliculas, setPeliculas] = useState([]);
  const [filteredPeliculas, setFilteredPeliculas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentPelicula, setCurrentPelicula] = useState(null);

  const agregarPelicula = async (pelicula) => {
    try {
      const response = await axios.get('https://fake-api-json.vercel.app/peliculas');
      const peliculasActuales = response.data;

      const ultimoId = peliculasActuales.reduce((maxId, pelicula) => {
        return pelicula.id && parseInt(pelicula.id) > maxId ? parseInt(pelicula.id) : maxId;
      }, 0);

      pelicula.id = (ultimoId + 1).toString();

      await axios.post('https://fake-api-json.vercel.app/peliculas', pelicula);

      setPeliculas([...peliculas, pelicula]);
      setFilteredPeliculas([...peliculas, pelicula]);
    } catch (error) {
      console.error("Error al agregar pelicula:", error);
    }
  };

  const borrarPelicula = async (id) => {
    try {
      await axios.delete(`https://fake-api-json.vercel.app/peliculas/${id}`);
      const updatedPeliculas = peliculas.filter(pel => pel.id !== id);
      setPeliculas(updatedPeliculas);
      setFilteredPeliculas(updatedPeliculas);
    } catch (error) {
      console.error("Error al borrar pelicula:", error);
    }
  };

  const editarPelicula = async (pelicula) => {
    try {
      const response = await axios.put(`https://fake-api-json.vercel.app/peliculas/${pelicula.id}`, pelicula);
      const updatedPeliculas = peliculas.map(pel => pel.id === pelicula.id ? response.data : pel);
      setPeliculas(updatedPeliculas);
      setFilteredPeliculas(updatedPeliculas);

      handleCloseModal();
    } catch (error) {
      console.error("Error al editar pelicula:", error);
    }
  };

  const handleOpenModal = (pelicula) => {
    setCurrentPelicula(pelicula);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentPelicula(null);
  };

  const handleSearch = (query) => {
    if (query === '') {
      setFilteredPeliculas(peliculas);
    } else {
      const filtered = peliculas.filter(pelicula =>
        pelicula.titulo.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredPeliculas(filtered);
    }
  };

  useEffect(() => {
    const fetchPeliculas = async () => {
      try {
        const response = await axios.get('https://fake-api-json.vercel.app/peliculas');
        setPeliculas(response.data);
        setFilteredPeliculas(response.data);
      } catch (error) {
        console.error("Error al recuperar peliculas", error);
      }
    };

    fetchPeliculas();
  }, []);

  return (
    <Router>
      <Header onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home carteleras={carteleras} peliculas={filteredPeliculas} setPeliculas={setPeliculas} borrarPelicula={borrarPelicula} handleOpenModal={handleOpenModal} />} />
        <Route path="/video" element={<Formulario carteleras={carteleras} agregarPelicula={agregarPelicula} />} />
        <Route path="/mirarpeli/:id" element={<Mirarpeli />} />
        <Route path="*" element={<Page404 />} />
      </Routes>

      <Modal show={showModal} handleClose={handleCloseModal} >
        <Formulario
          agregarPelicula={agregarPelicula}
          carteleras={carteleras}
          pelicula={currentPelicula}
          editarPelicula={editarPelicula}
        />
      </Modal>
      <Footer />
    </Router>
  );
}

export default App;





