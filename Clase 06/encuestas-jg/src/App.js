import React from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import MenuInicial from './components/menu';
import NotFound from './components/notFound';
import Encuestas from './components/encuestas';
import Encuesta from './components/encuesta';
import CrearEncuesta from './components/añadirEncuesta';
import encuestasData from './data/encuestasData.json';

function App() {
  const [encuestas, setEncuestas] = useState(encuestasData);

  const agregarEncuesta = (nuevaEncuesta) => {
    nuevaEncuesta.id = encuestas.length + 1
    setEncuestas([...encuestas, nuevaEncuesta]);
  };
  return (
    <div>
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path='/' element={<MenuInicial/>} />
            <Route path='/encuestas' element={<Encuestas encuestas={encuestas} />} />
            <Route path='/encuestas/:id' element={<Encuesta encuestas={encuestas} />} />
            <Route path='/encuestas/nueva-encuesta' element={<CrearEncuesta agregarEncuesta={agregarEncuesta} />} />
            <Route path='*' element={< NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;



