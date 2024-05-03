import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Lobby from './paginas/cliente_lobby/cliente_lobby';
import Header from './componentes/header';
import MeusVoos from './paginas/cliente_voos/cliente_voos';
import Logistica from './paginas/logistica/logistica';
import CadastroDrone from './paginas/logistica_drones/logistica_drones';
import CadastroBateria from './paginas/logistica_baterias/logistica_baterias';

// Importar páginas !!!!!

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Lobby />} />
          <Route path="/cliente_voos" element={<MeusVoos />} />
          <Route path="/logistica" element={<Logistica />} />
          <Route path="/logistica_drones" element={<CadastroDrone />} />
          <Route path="/logistica_baterias" element={<CadastroBateria />} />

          {/* <Route path="/" element={<Voos />} /> */}
          {/* Adicione mais rotas conforme necessário */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

