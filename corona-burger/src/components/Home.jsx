import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/2.png'
import  styles  from '../assets/Home.module.css'

export const Home = () => {
  return (
    <Fragment>
        <img className={styles.logo} alt='logo corona burger' src={image}/>
            <Link to='/TakeOrder' >
                <button className={styles.btnPedido}>
                    Tomar pedido
                </button>
            </Link>   
            <Link to='/Kitchen' >
                <button className={styles.btnCocina}>
                    Cocina
                </button>
            </Link> 
    </Fragment>
  )
}