import React from "react";
import { Link } from "react-router-dom";

function MenuInicial (){
    return(
<div className="Main">
    <h1>Bienvenido a la App de Encuestas</h1>
    <div className="mainLink">
    <Link to="/encuestas">Ir a las Encuestas</Link>
    </div>
</div>
)
}

export default MenuInicial 