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
                <div className="modal-backdrop">
                    <div className="modal">
                        <h2>Cadastro de Conjunto</h2>
                        <p>Formulário para cadastrar um conjunto de equipamentos.</p>
                        {/* Formulário ou outros elementos interativos */}
                        <button onClick={toggleModal}>Fechar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CadastroConjunto;
