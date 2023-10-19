import React from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuInicial from './components/menu';
import NotFound from './components/notFound';
import Encuestas from './components/encuestas';
import Encuesta from './components/encuesta';
import AñadirEncuesta from './components/añadirEncuesta';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path='/' element={<MenuInicial/>} />
            <Route path='/encuestas' element={<Encuestas />} />
            <Route path='/encuestas/:id' element={<Encuesta />} />
            <Route path='/encuestas/nueva-encuesta' element={<AñadirEncuesta />} />
            <Route path='*' element={< NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;



