import React, { useState, useMemo } from 'react';
import { DataTable, data } from './DataTable';
import './cliente_voos.css';
import InformationPanel from './InformationPanel/InformationPanel';

function Voos() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  const [filters, setFilters] = useState({
    fazenda: '',
    identificacao: '',
    data: '',
    validacao: false
  });

  // Extrair valores únicos para os dropdowns
  const fazendas = useMemo(() => [...new Set(data.map(item => item.fazenda))], [data]);
  const identificacoes = useMemo(() => [...new Set(data.map(item => item.identificacao))], [data]);
  const datas = useMemo(() => [...new Set(data.map(item => item.data))], [data]);

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="Main">

        <div className="filters">
            <select name="fazenda" onChange={handleFilterChange} value={filters.fazenda}>
                <option value="">Fazenda</option>
                {fazendas.map((fazenda, index) => <option key={index} value={fazenda}>{fazenda}</option>)}
            </select>

            <select name="identificacao" onChange={handleFilterChange} value={filters.identificacao}>
                <option value="">Identificação</option>
                {identificacoes.map((id, index) => <option key={index} value={id}>{id}</option>)}
            </select>

            <select name="data" onChange={handleFilterChange} value={filters.data}>
                <option value="">Data</option>
                {datas.map((data, index) => <option key={index} value={data}>{data}</option>)}
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

        <DataTable filters={{filters}} onItemClick={handleItemClick} />
        {selectedItem && <InformationPanel item={selectedItem} onClose={handleClose} />}
      
    </div>
  );
}

export default Voos; 