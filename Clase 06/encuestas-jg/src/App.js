import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuInicial from './components/menu';
import notFound from './components/notFound';
import Encuestas from './components/encuestas';
import Encuesta from './components/encuesta';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path='/' element={<MenuInicial />} />
            <Route path='/encuestas' element={<Encuestas />} />
            <Route path='/encuestas/:id' element={<Encuesta />} />
            <Route path='*' element={<notFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;



