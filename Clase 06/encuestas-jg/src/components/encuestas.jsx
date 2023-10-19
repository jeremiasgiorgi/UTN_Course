import React from "react";
import { Link } from "react-router-dom";
import encuestasData from '../data/encuestasData.json';

function Encuestas() {
    return(
      <div className='completo'>
        <h2>Encuestas Disponibles</h2>
        {encuestasData.map((encuesta) => (
          <ul key={encuesta.id} className="ul-encuestas">
             <li key={encuesta.id}>
        
             <Link to={`/encuestas/${encuesta.id}`}>{encuesta.title}</Link>
      
            </li>
        </ul>

       ))}
  </div>
    )
}
export default Encuestas