import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import NavegacaoLogistica from '../../components/navegacao_logistica/navegacao_logistica';
import PainelLogistica from '../../components/painel_logistica/painel_logistica';
//import CadastroConjunto from '../../components/cadastro_conjunto/cadastro_conjunto';
import './logistica.css';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"



function Logistica() {

    const navigate = useNavigate();

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDialog = () => setIsDialogOpen(true);
    const closeDialog = () => setIsDialogOpen(false);

    const [isConjuntoDialogOpen, setIsConjuntoDialogOpen] = useState(false);
    const openConjuntoDialog = () => setIsConjuntoDialogOpen(true);
    const closeConjuntoDialog = () => setIsConjuntoDialogOpen(false);


    

    const dados = {
        drones: { total: 10, ativos: 7, imgSrc: "/drone_icon.png" },
        baterias: { total: 20, ativos: 14, imgSrc: "/bateria_icon.png" },
        dispensers: { total: 15, ativos: 9, imgSrc: "/dispenser_icon.png" },
        operadores: { total: 4, ativos: 4, imgSrc: "/controle.png" }
    };

    // Exemplo de funções handler
    const visualizarSeção = (seção) => {
        console.log(`Visualizar seção: ${seção}`);
        
        const routeMap = {
            drones: '/logistica_drones',
            baterias: '/logistica_baterias',
            dispensers: '/logistica_dispensers',
            operadores: '/logistica_operadores'
        };
        navigate(routeMap[seção]);
    };

    const cadastrarItem = (item) => {
        openDialog();
        console.log(`Cadastrar item: ${item}`);
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
            <Dialog isOpen={isConjuntoDialogOpen} className = "cadastro_conjunto">
            <DialogTrigger className="cadastro_conjunto-trigger" onClick={openConjuntoDialog}>Cadastrar Conjunto</DialogTrigger>
                <DialogContent>
                    <DialogTitle>Cadastrar Novo Conjunto</DialogTitle>
                    {/* Inserir campos do formulário aqui */}
                    <button onClick={closeConjuntoDialog}>Fechar</button>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default Logistica;
