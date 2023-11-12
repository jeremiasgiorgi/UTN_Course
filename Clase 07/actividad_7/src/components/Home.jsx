import React from 'react';
import Typed from 'typed.js';

function Home() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<i> Developer.<i>",
        "<i> Rocketeer.<i>",
        "<i> Enthusiast.<i>",
        "<i> Happy Guy!<i>"
      ],
      typeSpeed: 90,
      backSpeed: 50,
      backDelay: 900,
      loop: true,
      loopCount: Infinity,
      smartBackspace: false,
      showCursor: true,
      cursorChar: '|'
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
    return (
    <div className='principal'>

      <div className='identity'>

        <p>Hi, My name is Jeremías</p>   

      </div> 

      <div className='presentation'>   

        <p> I'm a <span className='typewriterText' ref={el} /></p>

      </div>

      <div className='bio'>      

        <p>Front-End developer and occasionally a crazy guy who launches experimental rockets.</p>
        <p>Welcome to my world!</p>

      </div>

      

    </div>
    );
}

export default Home;