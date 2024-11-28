 
import './geral.css';
import foto from '../images/perfil.png';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

import PostItCard from "../geral/card.js";

function Geral() {

  const navigate = useNavigate();

  return (
    <div className="app">
      <header className="header">
      <img src="logo.png"className="logo" style={{
        width: "230px", marginRight: "10em", marginBottom: "100px", cursor: "pointer" // Background color
      }} onClick={() => navigate("/geral")}/>
        
      </header>
      <img src={foto} style={{
        width: "80px", marginLeft: "50em", marginTop: "-180px", cursor: "pointer" // Background color
      }} onClick={() => navigate("/perfil")} />
     
        <h1 className="title">Todas as tarefas</h1>
        <button className="create-button" onClick={() => navigate("/tarefa")}>CRIAR UMA TAREFA</button>
        <button className="create-button" onClick={() => navigate("/pomodoro")}>POMODORO</button>
        <div className="task-grid">
        <PostItCard text="TITULO" color="#f6c453" />
        </div>
    
    </div>
  );
}

export default Geral;
