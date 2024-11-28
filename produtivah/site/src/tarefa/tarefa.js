import './tarefa.css';
import { useNavigate } from "react-router-dom";
import foto from '../images/perfil.png';
import lixo from '../images/lixo.png';

import React, { useState } from "react";
import "./tarefa.css";

const TaskEditor = () => {

   
  const [urgency, setUrgency] = useState("neutro");
  const [textSize, setTextSize] = useState(12);


  const handleUrgencyChange = (value) => setUrgency(value);
  const handleTextSizeChange = (event) => setTextSize(event.target.value);
 

  const navigate = useNavigate();

  
  return (
    <div className="task-editor">
      <header className="header">
      <img src="logo.png"className="logo" style={{
        width: "230px", marginRight: "28em", marginBottom: "100px", cursor: "pointer" // Background color
      }} onClick={() => navigate("/geral")}/>
        
      </header>
      <img src={foto} style={{
        width: "80px", marginLeft: "70em", marginTop: "-180px", cursor: "pointer" // Background color
      }} onClick={() => navigate("/perfil")} />

      <main className="editor">
        <div className="task">
          <h2 className="task-title">TÍTULO</h2>
          <hr />
          <textarea
            className="task-content"
            placeholder="Escreva sua tarefa aqui..."
            style={{ fontSize: `${textSize}px` }}
          />
        </div>

        <div className="controls">
          <div className="urgency">
            <p className="control-title">Urgência</p>
            <label>
              <input 
                type="radio"
                name="urgency"
                value="muito urgente"
                checked={urgency === "muito urgente"}
                onChange={() => handleUrgencyChange("muito urgente")}
              />
              <span className="dot red"></span> muito urgente
            </label>
            <label>
              <input
                type="radio"
                name="urgency"
                value="neutro"
                checked={urgency === "neutro"}
                onChange={() => handleUrgencyChange("neutro")}
              />
              <span className="dot yellow"></span> neutro
            </label>
            <label>
              <input
                type="radio"
                name="urgency"
                value="pouco urgente"
                checked={urgency === "pouco urgente"}
                onChange={() => handleUrgencyChange("pouco urgente")}
              />
              <span className="dot green"></span> pouco urgente
            </label>
          </div>

          <div className="text-options">
            <p>Texto</p>
            <select value={textSize} onChange={handleTextSizeChange}>
              {[10, 12, 14, 16, 18, 20].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          

          <div className="delete">
            <p>Excluir</p>
            <button className="delete-btn" >
              🗑️
            </button>
          </div>

          <button className="save-btn"   onClick={() => {
        navigate("/geral")}}>
            salvar
          </button>
        </div>
      </main>
    </div>
  );
};

export default TaskEditor;