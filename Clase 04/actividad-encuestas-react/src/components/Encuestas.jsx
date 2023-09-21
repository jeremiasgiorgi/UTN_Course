import React from 'react';

function Encuestas({ encuestas }) {
    return(
        <div className='completo'>
            <h2>Encuestas Disponibles</h2>
            <ul>
                {encuestas.map (encuesta => (
                    <li key = {encuesta.id}>{encuesta.pregunta}
                    <div className='opciones'>
                        <ul>
                            {encuesta.opciones.map(opciones =>(
                             <li key = {opciones.id}>{opciones}</li>   
                            ))}
                        </ul>
                        </div>
                        </li>
                ))}
            </ul>
        </div>
    )
}
export default Encuestas;
