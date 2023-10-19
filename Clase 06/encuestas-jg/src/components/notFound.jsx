import React from "react";
import { Link } from "react-router-dom";

function NotFound (){
    return(
        <div className="no-encontrado">
            <h1>404</h1>
            <h2>Lo sentimos, La pagina a la cual quieres acceder no existe</h2>
            <h3>:c</h3>
            <Link to="/">Volver</Link>

        </div>
    )
}
export default NotFound