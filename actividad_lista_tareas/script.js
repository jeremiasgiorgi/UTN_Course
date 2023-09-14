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
function tareaCompletada(tarea){
    tarea.classList.toggle("completed");

}

document.getElementById("listaTareas").addEventListener("click",
function(event) {
    if (event.target.tagName === "LI") {
    tareaCompletada(event.target);
    }
    });

function mostrarPendientes(){
    const tareas = document.querySelectorAll("li");
    tareas.forEach(tarea =>{
        if(!tarea.classList.contains("completed")){
            tarea.style.display = "flex";

        } else {tarea.style.display = "none";}
    })}

function mostrarCompletas(){
    const tareas = document.querySelectorAll("li");
    tareas.forEach(tarea =>{
        if(tarea.classList.contains("completed")){
            tarea.style.display = "flex";

        } else {tarea.style.display = "none";}
    })}
console.log("CVOS © 2023 - Todos los Derechos Reservados")