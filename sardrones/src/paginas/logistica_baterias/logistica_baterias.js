import React, { useState } from 'react';
import './logistica_baterias.css';
import NavegacaoLogistica from '../../componentes/navegacao_logistica/navegacao_logistica';

function CadastroDrone(props) {
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

function ListaDrones(props) {
    return (
        <div className="lista_container">
            <h2>Baterias Cadastradas</h2>
            <ul>
            {props.drones.map((drone, index) => (
                <li key={index}>{`Nome: ${drone.nome}, Série: ${drone.serie}, Modelo: ${drone.modelo}, Ciclos: ${drone.ciclos}, Observações: ${drone.observacoes}`}</li>
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
