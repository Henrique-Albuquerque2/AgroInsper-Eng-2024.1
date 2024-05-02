// PainelLogistica.js
import React from 'react';
import './painel_logistica.css';

function PainelLogistica({ title, total, ativos, visualizarSeção, cadastrarItem, imgSrc }) {
    return (
        <div className="info-panel">
            <h3>{title}</h3>
            <img src={imgSrc} alt="Imagem" style={{ height: '100px', width: 'auto' }} /> {/* Ajuste as dimensões conforme necessário */}
            <div className="info-panel-content">
                <p>Total: {total}</p>
                <p>Ativos: {ativos}</p>
                <div className="info-panel-actions">
                    <button onClick={visualizarSeção}>Visualizar Seção</button>
                    <button onClick={cadastrarItem}>Cadastrar</button>
                </div>
            </div>
        </div>
    );
}

export default PainelLogistica;
