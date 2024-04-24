import { Routes, Route, Link } from 'react-router-dom';
import Lobby from '../cliente_lobby/cliente_lobby';
import React, { useState, useEffect, useMemo } from 'react';
import './cliente_voos.css'; // Adicione seus estilos específicos

import { useTable } from 'react-table';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function MeusVoos() {
    const [voos, setVoos] = useState([]);
    const [filtros, setFiltros] = useState({
        fazenda: '',
        identificacao: '',
        data: null,
        validacao: ''
    });

    // Função para buscar os voos com os filtros aplicados
    const buscarVoos = () => {
        // Simulando uma chamada de API
        console.log("Buscando voos com filtros:", filtros);
        // Suponha que setVoos é atualizado aqui com os dados retornados da API
    };

    const dataColumns = useMemo(() => [
        { Header: 'Fazenda', accessor: 'fazenda' },
        { Header: 'Identificação', accessor: 'identificacao' },
        { Header: 'Data', accessor: 'data' },
        { Header: 'Validação', accessor: 'validacao' }
    ], []);

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns: dataColumns, data: voos });

    return (
        <div className="MeusVoos">
            <div className="filtros">
                <input
                    type="text"
                    placeholder="Fazenda"
                    value={filtros.fazenda}
                    onChange={e => setFiltros({...filtros, fazenda: e.target.value})}
                />
                <input
                    type="text"
                    placeholder="Identificação"
                    value={filtros.identificacao}
                    onChange={e => setFiltros({...filtros, identificacao: e.target.value})}
                />
                <DatePicker
                    selected={filtros.data}
                    onChange={date => setFiltros({...filtros, data: date})}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Data"
                />
                <input
                    type="text"
                    placeholder="Validação"
                    value={filtros.validacao}
                    onChange={e => setFiltros({...filtros, validacao: e.target.value})}
                />
                <button onClick={buscarVoos}>Buscar</button>
            </div>
            <div className="tabela-voos">
                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map(row => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => (
                                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MeusVoos;
