import React from 'react';

function Hobbies() {
    // Datos ficticios de hobbies
    const hobbies = [
        {
            id: 1,
            nombre: 'Cohetería Experimental Amateur',
            descripcion: 'Uno de los Hobbies más desafiantes, educativos y emocionantes. La cohetería experimental es una actividad mediante la cual se diseñan y construyen cohetes enteramente desde "cero". La mayoría de los componentes, incluidos el motor y el propelente, son de fabricación propia. El objetivo de la Cohetería Experimental Amateur es diseñar, construir, probar y lanzar cohetes.',
        },
        {
            id: 2,
            nombre: 'Fotografía',
            descripcion: 'Capturar momentos especiales y unicos con mi cámara.',
        },
        {
            id: 3,
            nombre: 'Trail Running',
            descripcion: ' La emoción de enfrentar desafíos como cambios de elevación, obstáculos naturales y condiciones climáticas cambiantes es lo que hace que el Trail Running sea tan emocionante para mí. Esta disciplina combina el correr al aire libre y la conexión con la naturaleza, lo que lo convierte en una experiencia única y gratificante.',
        },
        {
            id: 4,
            nombre: 'Gaming',
                descripcion: 'En mi tiempo libre juego un poco, Si alguna vez necesitas consejos sobre cómo derrotar a un jefe final, soy tu tipo!',
        },
    ];

    return (
        <div className="container text-center mb-5 text-white">
            <div className='mt-4 mb-4 text-center text-white'>
            <h2>My hobbies</h2>
            </div>
            <ul className="list-group">
                {hobbies.map((hobby) => (
                    <li key={hobby.id} className="list-group-item text-white">
                        <div className='mt-2 mb-2 text-center text_white'>
                        <h5>{hobby.nombre}</h5></div>
                        <p>{hobby.descripcion}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Hobbies;

