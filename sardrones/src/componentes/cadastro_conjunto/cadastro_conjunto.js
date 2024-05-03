import React, { useState } from 'react';
import './cadastro_conjunto.css';

function CadastroConjunto() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleModal} className="cadastro-btn">
                Cadastrar Conjunto
            </button>
            {isOpen && (
                <div className="modal-backdrop" onClick={toggleModal}> {/* Fecha o modal ao clicar fora dele */}
                    <div className={isOpen ? "modal modal-active" : "modal"} onClick={e => e.stopPropagation()}> 
                        <h2>Cadastro de Conjunto</h2>
                        <p>Formulário para cadastrar um conjunto de equipamentos.</p>
                        <button className='fechar_button' onClick={toggleModal}>Fechar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CadastroConjunto;

