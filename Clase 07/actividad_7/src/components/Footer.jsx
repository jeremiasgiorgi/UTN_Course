import React from 'react';

function Footer() {
    return (
        
            <footer className="bg-dark text-white text-center py-3 fixed-bottom"> 
                &copy; {new Date().getFullYear()} CVOS  - Todos los derechos reservados
            </footer>
        
    );
}

export default Footer;