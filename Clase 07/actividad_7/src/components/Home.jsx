import React from 'react';
import Typed from 'typed.js';

function Home() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<i>I'm a Developer<i>",
        "<i>I'm a Rocketeer<i>",
        "<i>I'm a Enthusiast<i>"
      ],
      typeSpeed: 90,
      backSpeed: 50,
      backDelay: 900,
      loop: true,
      loopCount: Infinity,
      smartBackspace: true
      
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
    return ( 
        <div className="centerMenu">
          <div className='typewriter'>
                <p>I'm Jeremias</p>
                <p> <span className='typewriterText' ref={el} /></p>
           </div>

              <div className='parrafoMenu'>
                <p>Hello everyone! I am a developer fond of Science, Rocketry, Physics and software, In this space I will share my passion for the worlds that fascinate me, I hope you find inspiration, knowledge and some other connections.</p>
                <p>Welcome to my world!</p>
              </div>                 
        </div>  
    );
}

export default Home;