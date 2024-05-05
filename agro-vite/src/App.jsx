import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Lobby from './paginas/cliente_lobby/cliente_lobby';
import Header from './components/header';
import MeusVoos from './paginas/cliente_voos/cliente_voos';
import Logistica from './paginas/logistica/logistica';
import CadastroDrone from './paginas/logistica_drones/logistica_drones';
import CadastroBateria from './paginas/logistica_baterias/logistica_baterias';
import CadastroDispenser from './paginas/logistica_dispensers/logistica_dispensers';
import LogisticaOperadores from './paginas/logistica_operadores/logistica_operadores';
import Piloto from './paginas/piloto/piloto';


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
          <Route path="/logistica_dispensers" element={<CadastroDispenser />} />
          <Route path="/logistica_operadores" element={<LogisticaOperadores />} />
          <Route path="/piloto" element={<Piloto />} />
          {/* <Route path="/" element={<Voos />} /> */}
          {/* Adicione mais rotas conforme necessário */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

