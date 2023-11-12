import React from 'react';

function About() {
    // Datos ficticios para el componente "Acerca de"
    const aboutData = {
        nombre: 'Jeremias Giorgi',
        edad: 19,
        profesion: 'Student',
        descripcion: 'I am a passionate web developer with experience in technologies like React and Bootstrap. I love building creative and functional web applications for my clients. Outside of work, I enjoy music, science and hiking in nature.',
    };

    return (
        <div className="container about">
            <div className='text-center mt-4 mb-4 text-white'>
            <h2>About me</h2></div>
            <div className="card">
                <div className="card-body text-white border border-light">
                    <div className='mb-4'>
                    <h3 className="card-title">{aboutData.nombre}</h3></div>
                    <p className="card-text">Age: {aboutData.edad} years old</p>
                    <p className="card-text">Profession: {aboutData.profesion}</p>
                    <p className="card-text">{aboutData.descripcion}</p>
                </div>
            </div>
        </div>
    );
}

export default About;
