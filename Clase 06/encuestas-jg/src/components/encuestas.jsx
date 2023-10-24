import React from "react";
import { Link } from "react-router-dom";

function Encuestas({ encuestas }) {
  return (
    <>
      <div className='completo'>
        <h2>Encuestas Disponibles</h2>
        {encuestas.map((encuesta) => (
          <ul key={encuesta.id} className="ul-encuestas">
            <li key={encuesta.id}>
              <Link to={`/encuestas/${encuesta.id}`}>{encuesta.title}</Link>
            </li>
          </ul>
        ))}
      </div>
      <div className="encuesta-link-creacion">
        <Link to="/encuestas/nueva-encuesta">Añade una Encuesta</Link>
      </div>
    </>
  );
}
export default Encuestas;