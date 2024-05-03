// import { Routes, Route, Link } from 'react-router-dom';
// import Lobby from '../cliente_lobby/cliente_lobby';
// import React, { useState, useRef, useMemo } from 'react';
// import './cliente_voos.css'; // Adicione seus estilos específicos

// import { useTable } from 'react-table';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from 'react';
import DataTable from './DataTable';

function Voos() {
  const [filters, setFilters] = useState({
    fazenda: '',
    identificacao: '',
    data: '',
    validacao: false
  });

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="App">
      <div className="filters">
        <select name="fazenda" onChange={handleFilterChange}>
          <option value="">Select Fazenda</option>
          <option value="Fazenda 1">Fazenda 1</option>
          <option value="Fazenda 2">Fazenda 2</option>
        </select>

        <select name="identificacao" onChange={handleFilterChange}>
          <option value="">Select Identificação</option>
          <option value="ID 1">ID 1</option>
          <option value="ID 2">ID 2</option>
        </select>

        <select name="data" onChange={handleFilterChange}>
          <option value="">Select Data</option>
          <option value="2023-01-01">2023-01-01</option>
          <option value="2023-01-02">2023-01-02</option>
        </select>

        <label>
          <input
            type="checkbox"
            name="validacao"
            checked={filters.validacao}
            onChange={handleFilterChange}
          /> Validação
        </label>
      </div>
      <DataTable filters={filters} />
    </div>
  );
}

export default Voos;
