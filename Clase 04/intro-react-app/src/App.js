import logo from './logo.svg';
import './App.css';
// import Usuario from './components/Usuario/Usuario';
// import ListaDeTareas from './components/Tareas/ListaDeTareas';
// import Contador from './components/Contador/Contador';
// import Saludo from './components/Saludo/Saludo';
import { useState } from 'react';
import Encuestas from './components/Encuestas/Encuestas';


function App() {
  // const [mensaje, setMensaje] = useState("");
  // const handleChange = (e) => {
  //   setMensaje(e.target.value)
  const encuestas = [
    { id: 1, pregunta: '¿Cuál es tu color favorito?', opciones:
    ['Rojo', 'Azul', 'Verde'] },
    { id: 2, pregunta: '¿Cuál es tu comida favorita?', opciones:
    ['Pizza', 'Hamburguesa', 'Sushi'] },
    ];
  // }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Encuestas encuestas={encuestas} />
       
        {/* <Usuario name="Jeremias" />
        <ListaDeTareas/>
        <Contador/>
        <input
        type='text'
        placeholder='Ingrese Un Mensaje'
        value={mensaje}
        onChange={handleChange}/>
        <Saludo mensaje={mensaje}/> */}
      </header>
    </div>
  );
}

export default App;
