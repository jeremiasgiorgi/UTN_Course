// Función para agregar una nueva tarea
function agregarTarea() {
    const nuevaTareaInput = document.getElementById("nuevaTarea");
    const listaTareas = document.getElementById("listaTareas");
    const nuevaTareaTexto = nuevaTareaInput.value.trim();
    
    if(nuevaTareaTexto !== ""){
        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = nuevaTareaTexto;
        listaTareas.appendChild(nuevaTarea);
        nuevaTareaInput.value = "";

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.className = "delete" ;
        botonEliminar.onclick = function() {
            listaTareas.removeChild(nuevaTarea);
        }
        nuevaTarea.appendChild(botonEliminar);
    }
}