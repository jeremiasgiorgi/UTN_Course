import React from "react";
import Tarea from "./Tareas";

function ListaDeTareas() {
    const tareas = [
    {id: 1, texto: "Hacer La Compra"},
    {id: 2, texto: "Lavar La Ropa"},
    {id: 3, texto: "Estudiar React"},
];
return (
    <div>
        <h2>Lista de Tareas</h2>
        <ul>
            {tareas.map((tarea) =>(
                <Tarea id={tarea.id} texto={tarea.texto}/>
            ))}
        </ul>
    </div>
);
}

export default ListaDeTareas;