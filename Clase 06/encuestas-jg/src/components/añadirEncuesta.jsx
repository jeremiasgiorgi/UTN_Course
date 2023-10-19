import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function AñadirEncuesta(){
    const [nuevaEncuesta, setEncuesta] = useState({});

    return(
        <div className="nueva-encuesta-contenedor">
        <h1>Crear encuesta</h1>
        <form onSubmit={() => console.log("Subido")}>
        <ul>
            <li>

                <label>Título:</label>
                <input
                     type="text"
                     id="titulo"
                     name="titulo"
                />
                </li><li>
                <label>Descripcion:</label>
                <input
                     type="text"
                     id="descripcion"
                     name="descripcion"
                />
            </li>
        </ul>
        <button type="submit">Guardar Encuesta</button>
        </form>

        </div>
    )
}

export default AñadirEncuesta