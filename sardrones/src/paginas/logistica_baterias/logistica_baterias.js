import React, { useState } from 'react';
import './logistica_baterias.css';
import NavegacaoLogistica from '../../componentes/navegacao_logistica/navegacao_logistica';

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
        <div className="lista_container">
            <h2>Baterias Cadastradas</h2>
            <ul>
            {props.baterias.map((bateria, index) => (
                <li key={index}>{`Série: ${bateria.serie}, Modelo: ${bateria.modelo}, Ciclos: ${bateria.ciclos}, Observações: ${bateria.observacoes}`}</li>
            ))}
            </ul>
        </div>
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
            <hr></hr>
            <ListaBaterias baterias={baterias} />
        </main>
    </body>
    );
}

export default App;
