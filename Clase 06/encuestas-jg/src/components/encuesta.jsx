import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import encuestasData from '../data/encuestasData.json'

function Encuesta() {
    const { id } = useParams();
    const encuesta = encuestasData.find((e) => e.id === parseInt(id));
    const [respuestas, setRespuestas] = useState({});
  
    if (!encuesta) {
      return <div>
        <h1>Lo sentimos</h1>
        <h2>No se encontró la encuesta solicitada</h2>
        <Link to="/encuestas">Volver al Inicio</Link>
        
        </div>;
    }

    const handleRadioChange = (questionId, selectedOption) => {
      // Actualiza el estado con la respuesta seleccionada
      setRespuestas({ ...respuestas, [questionId]: selectedOption });
    };
    const handleSubmit = () => {
      // Muestra las respuestas seleccionadas en la consola
      console.log('Respuestas seleccionadas:', respuestas);
    };
  
    return (
      <>
        <h1>Esta es la encuesta {encuesta.id}</h1>
        <h2>{encuesta.title}</h2>

        <ul>

          {encuesta.questions.map((questions) => (
          <li key={questions.id}>{questions.question}

            <ul>
              {questions.options.map(options =>(
                <li key={options}>
                  <input
                    type="radio"
                    name={`question_${questions.id}`}
                    value={options}
                    onChange={() => handleRadioChange(questions.id, options)}
                  />
                  {options}
                </li>
              ))}
            </ul>

          </li>      
          ))}

        </ul>
        <button onClick={handleSubmit}>Submit</button>
      </>
    );
  }
  

export default Encuesta