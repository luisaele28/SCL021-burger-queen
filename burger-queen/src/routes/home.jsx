import React from 'react';
//import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
        <img src="logo.webp" alt="¡Bienvenidos!" className='logoH' />
        {/*¡Bienvenido! ✧Inicia sesión por favor✧</p>*/}
         <div className='btnHome'> 
         
          {/*<button><Link to="/loginW" img src="waiter.png" className='waiter'> </Link> </button>
          <button><Link to="/loginC" img src="chef.png" className='chef'> </Link></button>*/}
          
          <button className="sing-in">Inicia Sesión</button>
          </div>
        
    </div>
  );
}

export default Home;