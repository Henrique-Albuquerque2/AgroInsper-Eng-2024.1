import React from 'react';
import NavegacaoLogistica from '../../components/navegacao_logistica/navegacao_logistica';
import PainelLogistica from '../../components/painel_logistica/painel_logistica';
import CadastroConjunto from '../../components/cadastro_conjunto/cadastro_conjunto';
import './logistica.css';


function Logistica() {
    const dados = {
        drones: { total: 10, ativos: 7, imgSrc: "/drone_icon.png" },
        baterias: { total: 20, ativos: 14, imgSrc: "/bateria_icon.png" },
        dispensers: { total: 15, ativos: 9, imgSrc: "/dispenser_icon.png" },
        operadores: { total: 4, ativos: 4, imgSrc: "/controle.png" }
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
                    imgSrc={dados.drones.imgSrc}
                    visualizarSeção={() => visualizarSeção('drones')}
                    cadastrarItem={() => cadastrarItem('drones')}
                />
                <PainelLogistica
                    title="Baterias"
                    total={dados.baterias.total}
                    ativos={dados.baterias.ativos}
                    imgSrc={dados.baterias.imgSrc}
                    visualizarSeção={() => visualizarSeção('baterias')}
                    cadastrarItem={() => cadastrarItem('baterias')}
                />
                <PainelLogistica
                    title="Dispensers"
                    total={dados.dispensers.total}
                    ativos={dados.dispensers.ativos}
                    imgSrc={dados.dispensers.imgSrc}
                    visualizarSeção={() => visualizarSeção('dispensers')}
                    cadastrarItem={() => cadastrarItem('dispensers')}
                />
                <PainelLogistica
                    title="Operadores"
                    total={dados.operadores.total}
                    ativos={dados.operadores.ativos}
                    imgSrc={dados.operadores.imgSrc}
                    visualizarSeção={() => visualizarSeção('operadores')}
                    cadastrarItem={() => cadastrarItem('operadores')}
                />
            </div>
            <CadastroConjunto />
        </div>
    );
}

export default Logistica;
