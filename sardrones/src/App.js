import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Lobby from './paginas/cliente_lobby/cliente_lobby';
// Importar páginas !!!!!

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Lobby />} />
          {/* <Route path="/" element={<Voos />} /> */}
          {/* Adicione mais rotas conforme necessário */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

