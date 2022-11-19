// Vista del estado
import React from 'react';
import { Link } from "react-router-dom";
import dataMenu from "../dataMenu.json";

function State() {
  return (
    <div>
    <div className="">
      <Link to="/">{/*<img src="back.png" className='back'/>*/}</Link>
      <Link to="/">{/*<img src="logOut.png" className='btnLogOut'/>*/}</Link>
      </div>
      
        <section className="state">
        <p> <img src="logo.png" alt="¡Bienvenidos!" className='logo' /> </p>
    
          <div className='estados'>
        <button><Link to="/">{/*<img src="images/listo.png" className='ok'/>*/}</Link></button>
        <button><Link to="/">{/*<img src="images/preparando.png" className='ok'/>*/}</Link></button>
        <button><Link to="/">{/*<img src="images/reloj.png" className='ok'/>*/}</Link></button>
        </div>

        {/*dataMenu.menu[0].items.map( (product) => (<p>{product.item}</p>))*/}
        
      {dataMenu.menu[0].items.map( (product) =>  <div className="menu" product={product.id}>
      <p>{product.item}</p>
      <h3>{product.price}</h3>
      <img src="/hamburguesa.jpg" alt="hamburguesa" />{product.picture}
    </div> )}
       
    {dataMenu.menu[0].items.map( (product) =>  <div product={product.id}>
    <p>{product.item}</p> 
    <h3>{product.price}</h3>
    <img src="/pepito.jpg" alt="pepito" />{product.picture}
    </div> )}

    {dataMenu.menu[0].items.map( (product) =>  <div product={product.id}>
    <p>{product.item}</p> 
    <h3>{product.price}</h3>
    <img src="/perroCaliente.jpg" alt="perro caliente" />{product.picture}
    </div> )}

    {dataMenu.menu[0].items.map( (product) =>  <div product={product.id}>
    <p>{product.item}</p> 
    <h3>{product.price}</h3>
    <img src="/cocaCola.jpeg" alt="cocacola" />{product.picture}
    </div> )}

    {dataMenu.menu[0].items.map( (product) =>  <div product={product.id}>
    <p>{product.item}</p> 
    <h3>{product.price}</h3>
    <img src="/sprice.jpg" alt="sprice" />{product.picture}
    </div> )}

    {dataMenu.menu[0].items.map( (product) =>  <div product={product.id}>
    <p>{product.item}</p> 
    <h3>{product.price}</h3>
    <img src="/malta.png" alt="malta" />{product.picture}
    </div> )}

    {dataMenu.menu[0].items.map( (product) =>  <div product={product.id}>
    <p>{product.item}</p> 
    <h3>{product.price}</h3>
    <img src="/papasFritas.jpg" alt="papas fritas" />{product.picture}
    </div> )}

    {dataMenu.menu[0].items.map( (product) =>  <div product={product.id}>
    <p>{product.item}</p> 
    <h3>{product.price}</h3>
    <img src="/tequeños.jpg" alt="tequeños" />{product.picture}
    </div> )}

    {dataMenu.menu[0].items.map( (product) =>  <div product={product.id}>
    <p>{product.item}</p> 
    <h3>{product.price}</h3>
  <img src="/pastelitos.jpg" alt="pastelitos" />{product.picture}
  </div> )}

       </section>
    </div>
  );
}

export default State;