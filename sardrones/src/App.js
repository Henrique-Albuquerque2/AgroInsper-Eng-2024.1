import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Lobby from './paginas/cliente_lobby/cliente_lobby';
import Header from './componentes/header';
import MeusVoos from './paginas/cliente_voos/cliente_voos';
// Importar páginas !!!!!

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Lobby />} />
          <Route path="/cliente_voos" element={<MeusVoos />} />
          {/* <Route path="/" element={<Voos />} /> */}
          {/* Adicione mais rotas conforme necessário */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

