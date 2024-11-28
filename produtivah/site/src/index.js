import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './home/home.js';
import Login from './login/login.js';
import Cadastro from './cadastro/cadastro.js';
import Geral from './geral/geral.js';
import Tarefa from './tarefa/tarefa.js';
import Perfil from './perfil/perfil.js';
import Pomodoro from './pomodoro/pomodoro.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/'             element={<Home />} />
          <Route path='/login'        element={<Login />} />
          <Route path='/perfil'       element={<Perfil/>} />
          <Route path='/cadastro'     element={<Cadastro />} /> 
          <Route path='/geral'        element={<Geral/>} />
          <Route path='/pomodoro'     element={<Pomodoro/>} />
          <Route path='/tarefa'       element={<Tarefa/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);