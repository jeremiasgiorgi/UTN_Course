import './App.css';
// import React, { useState } from 'react';
import Encuestas from './components/Encuestas';

function App() {
  const encuestas = [
    { id: 1, pregunta: '¿Cuál es tu color favorito?', opciones:
    ['Rojo', 'Azul', 'Verde'] },
    { id: 2, pregunta: '¿Cuál es tu comida favorita?', opciones:
    ['Pizza', 'Hamburguesa', 'Sushi'] },
    { id: 3, pregunta: '¿Cuál es tu nombre fav?', opciones:
    ['Andres', 'Patinus', 'Cocacola'] },
    ];
  return (
    <div className="App">
      <h1>Aplicacion De Encuestas</h1>
      <Encuestas encuestas={encuestas}/>
    
    </div>
  );
}

export default App;
