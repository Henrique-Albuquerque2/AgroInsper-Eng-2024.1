import React, { useState } from 'react';
import './logistica_dispensers.css';
import NavegacaoLogistica from '../../components/navegacao_logistica/navegacao_logistica';

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
            <h2>Cadastro de Bateria</h2>
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
        <div className="lista_container">
            <h2>Dispensers Cadastrados</h2>
            <ul>
            {props.dispensers.map((dispenser, index) => (
                <li key={index}>{`Modelo: ${dispenser.modelo}, Embalagens: ${dispenser.embalagens}, Observações: ${dispenser.observacoes}`}</li>
            ))}
            </ul>
        </div>
    );
}

function App() {
    const [dispensers, setDispensers] = useState([]);

    function adicionarDispenser(novoDispenser) {
        setDispensers([...dispensers, novoDispenser]);
    }
    

    return (
    <body>
        <NavegacaoLogistica />
        <main className="App dispenser-page">
            <CadastroDispenser onCadastro={adicionarDispenser} />
            <hr></hr>
            <ListaDispensers dispensers={dispensers} />
        </main>
    </body>
    );
}

export default App;
