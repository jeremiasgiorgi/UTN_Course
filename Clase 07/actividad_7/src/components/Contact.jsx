import React from 'react';

function Contact() {
    return (
        <div className="container mt-5 text-white " data-bs-theme="dark">
             <div className='mt-5 mx-auto col-12 text-center'><h2>Contact me</h2></div>
            <form>
                <div className="form-group mb-4 mt-4">
                    <input type="text" className="form-control" id="nombre" placeholder="Your Name!" />
                </div>
                <div className="form-group mb-4 mt-4">
                    <input type="email"  className="form-control" id="email" placeholder="E-Mail" />
                </div>
                <div className="form-group mb-4 mt-4">
                    <textarea className="form-control"  id="mensaje" placeholder="Message" rows="4" autoComplete="off" style={{ resize: "none", height: "100px"}}></textarea>
                </div>
                <div className="mb-3 mt-3 col-6 mx-auto text-center"> {/* Espacio adicional antes del botón */}
                    <button type="submit" className="custom-btn btn">¡Send it!</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
