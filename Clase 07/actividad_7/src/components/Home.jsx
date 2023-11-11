import React from 'react';
import Typed from 'typed.js';

function Home() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<i>Developer<i>",
        "<i>Rocketeer<i>",
        "<i>Enthusiast<i>"
      ],
      typeSpeed: 90,
      backSpeed: 50,
      backDelay: 900,
      loop: true,
      loopCount: Infinity,
      
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
    return (
        <div className="container mt-5 col-6 mx-auto">
        <div className="mb-4">
                <h1>I'm Jeremias,</h1>
                <h1>I'm a <span className='typewriterText' ref={el} /></h1>

                <div className='mt-4'>
                    <p>¡Hola a todos! Soy un desarrollador aficionado a la Ciencia, Cohetería, Física y el software, En este espacio compartiré mi pasión por los mundos que me fascinan, espero que encuentres inspiración, conocimientos y algunas que otras conexiones </p>
            
                    <p>¡Bienvenido a mi mundo!</p>
            </div>
          </div>      
        </div>
    );
}

export default Home;