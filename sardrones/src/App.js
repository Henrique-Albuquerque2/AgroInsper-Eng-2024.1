import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Lobby from './paginas/cliente_lobby/cliente_lobby';
import Voos from './paginas/cliente_voos/cliente_voos';
import Analises from './paginas/cliente_analises/cliente_analises'
import Perfil from "./paginas/perfil/perfil"
// Importar páginas !!!!!

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Lobby />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/voos" element={<Voos />} />
          <Route path="/analises" element={<Analises />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

