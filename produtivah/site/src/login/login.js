
import './login.css';

import { useNavigate } from "react-router-dom";

import React, { useState } from 'react';



  function Login()
  {  const navigate = useNavigate();
    
    return (
   
    <div className="signup-page">
      <div className="signup-container">
        <div className="image-container">
          <img
            src="image.png" // Replace with the actual image path
            alt="Character holding a big tomato"
            className="signup-image"
          />
        </div>
        <div className="form-container">
          <h2 className="form-title">LOGIN</h2>
          <form>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="Digite seu e-mail" />

            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
            />

            <button type="submit" className="submit-button" onClick={() => navigate("/geral")}>
              Iniciar Sessão
            </button>
          </form>
          <p className="login-link">
            →{" "}
            <span onClick={() => navigate("/cadastro")}>
              Ainda não tenho conta
            </span>
          </p>
        </div>
      </div>
    </div>
  );  
}


export default Login;
