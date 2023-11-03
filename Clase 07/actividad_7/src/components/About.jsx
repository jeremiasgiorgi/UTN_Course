import React from 'react';

function About() {
    // Datos ficticios para el componente "Acerca de"
    const aboutData = {
        nombre: 'Jeremias Giorgi',
        edad: 19,
        profesion: 'Estudiante',
        descripcion: 'Soy un apasionado desarrollador web con experiencia en tecnologías como React y Bootstrap. Me encanta crear aplicaciones web creativas y funcionales para mis clientes. Fuera del trabajo, disfruto de la música, la ciencia y el senderismo en la naturaleza.',
    };

    return (
        <div className="container">
            <div className='text-center mt-4 mb-4'>
            <h2>Acerca de Mí</h2></div>
            <div className="card">
                <div className="card-body">
                    <div className='mb-4'>
                    <h3 className="card-title">{aboutData.nombre}</h3></div>
                    <p className="card-text">Edad: {aboutData.edad} años</p>
                    <p className="card-text">Profesión: {aboutData.profesion}</p>
                    <p className="card-text">{aboutData.descripcion}</p>
                </div>
            </div>
        </div>
    );
}

export default About;
