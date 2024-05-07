import React, { useState } from 'react';
import './logistica_dispensers.css';
import NavegacaoLogistica from '../../components/navegacao_logistica/navegacao_logistica';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


function CadastroDispenser(props) {
    const [modelo, setModelo] = useState('');
    const [embalagens, setEmbalagens] = useState('');
    const [observacoes, setObservacoes] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        props.onCadastro({modelo, embalagens, observacoes});
        setModelo('');
        setEmbalagens('');
        setObservacoes('');
    }

    return (
        <div className="cadastro_container">
            <h2>Cadastro Dispenser</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Modelo do Dispenser"
                    value={modelo}
                    onChange={(e) => setModelo(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Nº de embalagens por voo"
                    value={embalagens}
                    onChange={(e) => setEmbalagens(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Observações"
                    value={observacoes}
                    onChange={(e) => setObservacoes(e.target.value)}
                    required
                />
                <button type="submit">Cadastrar Dispenser</button>
            </form>
        </div>
    );
}

function ListaDispensers(props) {
    return (
        <div className="lista_container_dispensers">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Modelo</TableHead>
                        <TableHead>Embalagens</TableHead>
                        <TableHead className="text-right">Observações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                {props.dispensers.map((dispenser, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{dispenser.modelo}</TableCell>
                        <TableCell>{dispenser.embalagens}</TableCell>
                        <TableCell className="text-right">{dispenser.observacoes}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

function App() {
    const [dispensers, setDispensers] = useState([]);

    function adicionarDispenser(dispenser) {
        setDispensers(dispensers.concat(dispenser));
    }

    return (
    <body>
        <NavegacaoLogistica />
        <main className="App dispenser-page">
            <CadastroDispenser onCadastro={adicionarDispenser} />
            <div class="linha-vertical"></div>
            <ListaDispensers dispensers={dispensers} />
        </main>
    </body>
    );
}

export default App;
