import React from 'react';
import NavegacaoLogistica from '../../componentes/navegacao_logistica/navegacao_logistica';
import PainelLogistica from '../../componentes/painel_logistica/painel_logistica';
import CadastroConjunto from '../../componentes/cadastro_conjunto/cadastro_conjunto';
import './logistica.css';


function Logistica() {
    const dados = {
        drones: { total: 10, ativos: 7 },
        baterias: { total: 20, ativos: 14 },
        dispensers: { total: 15, ativos: 9 },
        operadores: { total: 4, ativos: 4 }
    };

    // Exemplo de funções handler
    const visualizarSeção = (seção) => {
        console.log(`Visualizar seção: ${seção}`);
        // Aqui você pode implementar navegação ou outra lógica
    };

    const cadastrarItem = (item) => {
        console.log(`Cadastrar item: ${item}`);
        // Aqui você pode abrir um modal de cadastro ou navegar para uma página de cadastro
    };

    return (
        <div className="logistics-page">
            <NavegacaoLogistica />
            <div className="info-panels">
                <PainelLogistica
                    title="Drones"
                    total={dados.drones.total}
                    ativos={dados.drones.ativos}
                    visualizarSeção={() => visualizarSeção('drones')}
                    cadastrarItem={() => cadastrarItem('drones')}
                />
                <PainelLogistica
                    title="Baterias"
                    total={dados.baterias.total}
                    ativos={dados.baterias.ativos}
                    visualizarSeção={() => visualizarSeção('baterias')}
                    cadastrarItem={() => cadastrarItem('baterias')}
                />
                <PainelLogistica
                    title="Dispensers"
                    total={dados.dispensers.total}
                    ativos={dados.dispensers.ativos}
                    visualizarSeção={() => visualizarSeção('dispensers')}
                    cadastrarItem={() => cadastrarItem('dispensers')}
                />
                <PainelLogistica
                    title="Operadores"
                    total={dados.operadores.total}
                    ativos={dados.operadores.ativos}
                    visualizarSeção={() => visualizarSeção('operadores')}
                    cadastrarItem={() => cadastrarItem('operadores')}
                />
            </div>
            <CadastroConjunto />
        </div>
    );
}

export default Logistica;
