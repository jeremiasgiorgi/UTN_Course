import React from "react";
import { useParams } from "react-router-dom";
import encuestasData from '../data/encuestasData.json'

function Encuesta() {
    const { id } = useParams();
    const encuesta = encuestasData.find((e) => e.id === parseInt(id));
    console.log(encuestasData)
  
    if (!encuesta) {
      return <div>No se encontró la encuesta con el ID {id}</div>;
    }
  
    return (
      <>
        <h1>Esta es la encuesta {encuesta.id}</h1>
      </>
    );
  }
  

export default Encuesta