
import "./perfil.css"; // Include the styles below

import foto from '../images/perfil.png';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

function Perfil() {
  const navigate = useNavigate();

  return (
    <div className="profile-page">
      <header className="header">
        <img src="logo.png"className="header"  onClick={() => navigate("/geral")}/>
      </header>
      <main className="main">
        <img src={foto}/>
        <p className="email">cliente@cliente.com</p>
        <button className="logout-button" onClick={() => navigate("/login")}>sair da conta</button>
      </main>
    </div>
  );
}

export default Perfil;
