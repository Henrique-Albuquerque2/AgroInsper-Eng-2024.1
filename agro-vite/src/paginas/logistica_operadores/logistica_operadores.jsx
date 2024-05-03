import React, { useState } from 'react';
import './logistica_drones.css';
import NavegacaoLogistica from '../../components/navegacao_logistica/navegacao_logistica';

function CadastroDrone(props) {
    const [nome, setNome] = useState('');
    const [serie, setSerie] = useState('');
    const [modelo, setModelo] = useState('');
    const [horas, setHoras] = useState('');
    const [observacoes, setObservacoes] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        props.onCadastro({ nome, serie, modelo, horas, observacoes});
        setNome('');
        setSerie('');
        setModelo('');
        setHoras('');
        setObservacoes('');
    }

    return (
        <div className="cadastro_container">
            <h2>Cadastrar Drone</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nome Fantasia"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Número de Série (SN)"
                    value={serie}
                    onChange={(e) => setSerie(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Modelo do Drone"
                    value={modelo}
                    onChange={(e) => setModelo(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Horas de Voo Iniciais"
                    value={horas}
                    onChange={(e) => setHoras(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Observações"
                    value={observacoes}
                    onChange={(e) => setObservacoes(e.target.value)}
                    required
                />
                <button type="submit">Cadastrar Drone</button>
            </form>
        </div>
    );
}

function ListaDrones(props) {
    return (
        <div className="lista_container">
            <h2>Drones Cadastrados</h2>
            <ul>
            {props.drones.map((drone, index) => (
                <li key={index}>{`Nome: ${drone.nome}, Série: ${drone.serie}, Modelo: ${drone.modelo}, Horas: ${drone.horas}, Observações: ${drone.observacoes}`}</li>
            ))}
            </ul>
        </div>
    );
}

function App() {
    const [drones, setDrones] = useState([]);

    function adicionarDrone(drone) {
        setDrones(drones.concat(drone));
    }

    return (
    <body>
        <NavegacaoLogistica />
        <main className="App drone-page">
            <CadastroDrone onCadastro={adicionarDrone} />
            <hr></hr>
            <ListaDrones drones={drones} />
        </main>
    </body>
    );
}

export default App;