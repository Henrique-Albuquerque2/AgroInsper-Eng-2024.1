import React from 'react';

const data = [
  { fazenda: 'Fazenda Monte Alegre', identificacao: '838088', data: '08-06-2023', validacao: true },
  { fazenda: 'Fazenda Sol Nascente', identificacao: '413980', data: '28-03-2024', validacao: true },
  { fazenda: 'Fazenda Monte Alegre', identificacao: '244373', data: '20-05-2022', validacao: false },
  { fazenda: 'Fazenda Boa Esperança', identificacao: '184923', data: '28-07-2022', validacao: true },
  { fazenda: 'Fazenda Bom Jardim', identificacao: '945591', data: '01-09-2021', validacao: true },
  { fazenda: 'Fazenda São José', identificacao: '126258', data: '27-12-2022', validacao: false },
  { fazenda: 'Fazenda Recanto Feliz', identificacao: '484304', data: '29-04-2023', validacao: true },
  { fazenda: 'Fazenda Bela Vista', identificacao: '587622', data: '04-02-2021', validacao: false },
  { fazenda: 'Fazenda Santa Maria', identificacao: '985682', data: '31-01-2023', validacao: true },
  { fazenda: 'Fazenda Novo Horizonte', identificacao: '656419', data: '19-03-2022', validacao: false },
  { fazenda: 'Fazenda Monte Alegre', identificacao: '342076', data: '11-02-2021', validacao: false },
  { fazenda: 'Fazenda Canaã', identificacao: '201111', data: '23-11-2022', validacao: true },
  { fazenda: 'Fazenda Bom Jardim', identificacao: '771405', data: '02-05-2021', validacao: true },
  { fazenda: 'Fazenda Boa Esperança', identificacao: '136028', data: '15-08-2023', validacao: false },
  { fazenda: 'Fazenda Sol Nascente', identificacao: '444564', data: '20-04-2023', validacao: false },
  { fazenda: 'Fazenda São José', identificacao: '572521', data: '30-10-2023', validacao: true },
  { fazenda: 'Fazenda Recanto Feliz', identificacao: '304413', data: '06-07-2021', validacao: true },
  { fazenda: 'Fazenda Bela Vista', identificacao: '353619', data: '18-08-2021', validacao: true },
  { fazenda: 'Fazenda Santa Maria', identificacao: '269782', data: '25-09-2022', validacao: false },
  { fazenda: 'Fazenda Novo Horizonte', identificacao: '834551', data: '27-11-2023', validacao: true },
  { fazenda: 'Fazenda Monte Alegre', identificacao: '379221', data: '24-06-2023', validacao: true },
  { fazenda: 'Fazenda Canaã', identificacao: '228345', data: '17-04-2022', validacao: true },
  { fazenda: 'Fazenda Bom Jardim', identificacao: '969118', data: '13-03-2024', validacao: false },
  { fazenda: 'Fazenda Boa Esperança', identificacao: '799266', data: '10-01-2021', validacao: true },
  { fazenda: 'Fazenda Sol Nascente', identificacao: '401286', data: '02-12-2021', validacao: false },
  // Repita esse padrão para adicionar mais registros conforme necessário
];

function DataTable({ filters, onItemClick }) {
  const filteredData = data.filter(item => (
    (filters.fazenda ? item.fazenda === filters.fazenda : true) &&
    (filters.identificacao ? item.identificacao === filters.identificacao : true) &&
    (filters.data ? item.data === filters.data : true) &&
    (filters.validacao ? item.validacao : true)
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Fazenda</th>
          <th>Identificação</th>
          <th>Data</th>
          <th>Validação</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item, index) => (
          <tr key={index} onClick={() => onItemClick(item)}>
            <td>{item.fazenda}</td>
            <td>{item.identificacao}</td>
            <td>{item.data}</td>
            <td>{item.validacao ? 'Sim' : 'Não'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export { DataTable, data };
