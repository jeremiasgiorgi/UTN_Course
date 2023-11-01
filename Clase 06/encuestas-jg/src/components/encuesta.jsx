import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

function Encuesta({ encuestas }) {
  const { id } = useParams();
  const encuesta = encuestas.find((e) => e.id === parseInt(id));

    const [respuestas, setRespuestas] = useState({});
  
    if (!encuesta) {
      return <div>
        <h1>Lo sentimos</h1>
        <h2>No se encontró la encuesta solicitada</h2>
        <Link to="/encuestas">Volver al Inicio</Link>
        
        </div>;
    }

    const handleRadioChange = (questionId, selectedOption) => {
      // Actualiza el estado con la respuesta seleccionada para la pregunta correspondiente
      setRespuestas((prevRespuestas) => ({
        ...prevRespuestas,
        [questionId]: selectedOption,
      }));
    };
    
    const handleSubmit = () => {
      // Muestra todas las respuestas seleccionadas en la consola
      console.log('Respuestas seleccionadas:', respuestas);
    };

    return (
      <div className="encuensta-item">
        <h2>{encuesta.title}</h2>

        <ul className="encuesta-item">

        {encuesta.questions.map((questions, questionIndex) => (
  <li key={questionIndex}>{questions.question}
    <ul className="ul-encuesta-container">
      {questions.options.map((options, optionIndex) => (
        <li key={options} className="li-encuesta-container">
          <input
            type="radio"
            name={`question_${questions.id}_${questionIndex}`}
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
        <button className="botonSub" onClick={handleSubmit}>Submit</button>
      </div>
    );
  }
  

export default Encuesta