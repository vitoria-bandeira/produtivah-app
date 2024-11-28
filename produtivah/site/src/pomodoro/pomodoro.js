import React, { useState, useEffect } from "react";
import "./pomodoro.css"; // Importa o arquivo CSS

import foto from '../images/perfil.png';

import { useNavigate } from "react-router-dom";

const TimerPage = () => {

    const navigate = useNavigate();

    const initialTime = 25 * 60 ;
  const [time, setTime] = useState(25 * 60 ); // Define o tempo inicial em segundos (24:17)
  const [isPaused, setIsPaused] = useState(true);

  // Formata o tempo para o formato mm:ss
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  // Alterna entre pausar e iniciar o temporizador
  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  // Atualiza o temporizador
  useEffect(() => {
    let timer;
    if (!isPaused && time > 0) {
      timer = setInterval(() => setTime((prevTime) => prevTime - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isPaused, time]);

  // Define pausas curtas ou longas
  const setShortBreak = () => {
    setTime(5 * 60); // Pausa curta (5 minutos)
    setIsPaused(true);
  };

  const setLongBreak = () => {
    setTime(15 * 60); // Pausa longa (15 minutos)
    setIsPaused(true);
  };

  const restartTimer = () => {
    setTime(initialTime); // Reinicia para o tempo inicial
    setIsPaused(true);    // Pausa o temporizador
  };

  return (
    <div className="container">
      <header className="header">
        <img src="logo.png" className="logo" style={{
        width: "230px", marginLeft: "10em", cursor: "pointer", paddingLeft: "1em" // Background color
      }} onClick={() => navigate("/geral")}/>
        <img src={foto} className="perfil" style={{
        width: "95px", marginLeft: "10em", cursor: "pointer", paddingLeft: "1em" // Background color
      }} onClick={() => navigate("/perfil")}/>
      </header>

      <div className="timer-container">
        <div className="timer">
          <h2 className="time">{formatTime(time)}</h2>
          <button onClick={togglePause} className="pause-button">
            {isPaused ? "▶" : "❚❚ "}
          </button>
        </div>
      </div>

      <div className="button-container">
        <button className="short-break-button" onClick={setShortBreak}>
          pausa curta
        </button>
        <button className="restart-button" onClick={restartTimer}>
          reiniciar
        </button>
        <button className="long-break-button" onClick={setLongBreak}>
          pausa longa
        </button>
      </div>
    </div>
  );
};

export default TimerPage;
