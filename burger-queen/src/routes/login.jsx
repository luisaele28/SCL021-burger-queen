import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../Components/Login";

const Login = () => {
  return (
    <>
      <LoginForm/>
      <nav>
        <Link to="/menu">Ingresar</Link>
      </nav>
    </>
  );
}
export default Login