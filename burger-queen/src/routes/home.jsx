import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/img/CoronaBurger.png';

const Home = () => {
  return (
    <>
      <div className="home">
        <div class="logo">
          <img className="Burger" src={logo} alt="logo" />
          <h1 className="textLogo">Corona Burger</h1>
        </div>
        <div className="btnHome">
            {/* Boton continuar nos lleva al login con click o */}
            <Link to="/login" className="btnlogin">Ingresar</Link>
            {/* Boton continuar nos lleva al login con click o */}
            <Link to="/register" className="btnregister">Crear Cuenta</Link>
        </div>
        {/* icon mesero -> menu
        icon chef -> chef */}
      </div>
    </>
  );
};
export default Home;