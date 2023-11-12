import React from 'react';

function Contact() {
    return (
        <div className="container mt-5 text-white">
             <div className='mt-5 mx-auto col-12 text-center'><h2>Contact me</h2></div>
            <form>
                <div className="form-group">
                    <div className='mt-2 mb-2'>
                    <label htmlFor="nombre">Name:</label></div>
                    <input type="text" className="form-control" id="nombre" />
                </div>
                <div className="form-group">
                    <div className='mt-2 mb-2'>
                    <label htmlFor="email">E-mail:</label></div>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                    <div className='mb-2 mt-2'>
                    <label htmlFor="mensaje">Message:</label></div>
                    <textarea className="form-control" id="mensaje" rows="4" style={{ resize: "none", height: "100px"}}></textarea>
                </div>
                <div className="mb-3 mt-3 col-6 mx-auto text-center"> {/* Espacio adicional antes del botón */}
                    <button type="submit" className="btn btn-primary">¡Send it!</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;