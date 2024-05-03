import React, { useState } from 'react';
import './cadastro_conjunto.css';

function CadastroConjunto() {
    const [isOpen, setIsOpen] = useState(false);
    // Estados para cada equipamento
    const [drone, setDrone] = useState({ nome: '', serie: '', modelo: '', horas: '', observacoes: '' });
    const [bateria, setBateria] = useState({ serie: '', modelo: '', ciclos: '', observacoes: '' });
    const [dispenser, setDispenser] = useState({ modelo: '', embalagens: '', observacoes: '' });
    const [operador, setOperador] = useState({ nome: '', nomeGuerra: '', numeroGuerra: '', horasVoadas: '', areaLevantada: '', voos: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você adicionaria a lógica para enviar esses dados ao servidor
        console.log({ drone, bateria, dispenser, operador });
        setIsOpen(false); // Fecha o modal após o envio
    };

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleModal} className="cadastro-btn">
                Cadastrar Conjunto
            </button>
            {isOpen && (
                <div className="modal-backdrop" onClick={toggleModal}>
                    <div className={isOpen ? "modal modal-active" : "modal"} onClick={e => e.stopPropagation()}>
                        <h2>Cadastro de Conjunto</h2>
                        <form onSubmit={handleSubmit}>
                            {/* Seção Drone */}
                            <div className="section">
                                <h3>Drone</h3>
                                <input type="text" placeholder="Nome Fantasia" value={drone.nome} onChange={e => setDrone({ ...drone, nome: e.target.value })} required />
                                <input type="text" placeholder="Número de Série" value={drone.serie} onChange={e => setDrone({ ...drone, serie: e.target.value })} required />
                                {/* Repetir para outros campos */}
                            </div>
                            {/* Seção Bateria */}
                            <div className="section">
                                <h3>Bateria</h3>
                                <input type="text" placeholder="Nº de Série" value={bateria.serie} onChange={e => setBateria({ ...bateria, serie: e.target.value })} required />
                                {/* Repetir para outros campos */}
                            </div>
                            {/* Seção Dispenser */}
                            <div className="section">
                                <h3>Dispenser</h3>
                                <input type="text" placeholder="Modelo" value={dispenser.modelo} onChange={e => setDispenser({ ...dispenser, modelo: e.target.value })} required />
                                {/* Repetir para outros campos */}
                            </div>
                            {/* Seção Operador */}
                            <div className="section">
                                <h3>Operador</h3>
                                <input type="text" placeholder="Nome" value={operador.nome} onChange={e => setOperador({ ...operador, nome: e.target.value })} required />
                                {/* Repetir para outros campos */}
                            </div>
                            <button type="submit">Enviar</button>
                        </form>
                        <button className='fechar_button' onClick={toggleModal}>Fechar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CadastroConjunto;

