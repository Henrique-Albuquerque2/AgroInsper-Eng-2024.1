import React, { useState } from 'react';
import './logistica_baterias.css';
import NavegacaoLogistica from '../../components/navegacao_logistica/navegacao_logistica';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
function CadastroBateria(props) {
    const [serie, setSerie] = useState('');
    const [modelo, setModelo] = useState('');
    const [ciclos, setCiclos] = useState('');
    const [observacoes, setObservacoes] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        props.onCadastro({serie, modelo, ciclos, observacoes});
        setSerie('');
        setModelo('');
        setCiclos('');
        setObservacoes('');
    }

    return (
        <div className="cadastro_container">
            <h2>Cadastro de Bateria</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Número de Série (SN)"
                    value={serie}
                    onChange={(e) => setSerie(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Modelo da Bateria"
                    value={modelo}
                    onChange={(e) => setModelo(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Ciclos Iniciais"
                    value={ciclos}
                    onChange={(e) => setCiclos(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Observações"
                    value={observacoes}
                    onChange={(e) => setObservacoes(e.target.value)}
                    required
                />
                <button type="submit">Cadastrar Bateria</button>
            </form>
        </div>
    );
}

function ListaBaterias(props) {
    return (

        <Table className= "lista_container_bat">
        <TableHeader>
            <TableRow>
            <TableHead className="w-[100px]">Série</TableHead>
            <TableHead>Modelo</TableHead>
            <TableHead>Ciclos</TableHead>
            <TableHead className="text-right">Observações</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
        {props.baterias.map((bateria, index) => (
            <TableRow key={index}>
            <TableCell className="font-medium">{bateria.serie}</TableCell>
            <TableCell>{bateria.modelo}</TableCell>
            <TableCell>{bateria.ciclos}</TableCell>
            <TableCell className="text-right">{bateria.observacoes}</TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    );
}

function App() {
    const [baterias, setBaterias] = useState([]);

    function adicionarBateria(bateria) {
        setBaterias(baterias.concat(bateria));
    }

    return (
    <body>
        <NavegacaoLogistica />
        <main className="App bateria-page">
            <CadastroBateria onCadastro={adicionarBateria} />
            <div class="linha-vertical"></div>
            <ListaBaterias baterias={baterias} />
        </main>
    </body>
    );
}

export default App;
