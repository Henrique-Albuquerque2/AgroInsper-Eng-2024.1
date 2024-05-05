import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavegacaoLogistica from '../../components/navegacao_logistica/navegacao_logistica';
import PainelLogistica from '../../components/painel_logistica/painel_logistica';
import './logistica.css';
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

function Logistica() {
    const navigate = useNavigate();

    // Estados para cada equipamento
    const [drone, setDrone] = useState({ nome: '', serie: '', modelo: '', horas: '', observacoes: '' });
    const [bateria, setBateria] = useState({ serie: '', modelo: '', ciclos: '', observacoes: '' });
    const [dispenser, setDispenser] = useState({ modelo: '', embalagens: '', observacoes: '' });
    const [operador, setOperador] = useState({ nome: '', nomeGuerra: '', numeroGuerra: '', horasVoadas: '', areaLevantada: '', voos: '' });

    const [isConjuntoDialogOpen, setIsConjuntoDialogOpen] = useState(false);
    const openConjuntoDialog = () => setIsConjuntoDialogOpen(true);
    const closeConjuntoDialog = () => setIsConjuntoDialogOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ drone, bateria, dispenser, operador });
        closeConjuntoDialog();
    };

    const dados = {
        drones: { total: 10, ativos: 7, imgSrc: "/drone_icon.png" },
        baterias: { total: 20, ativos: 14, imgSrc: "/bateria_icon.png" },
        dispensers: { total: 15, ativos: 9, imgSrc: "/dispenser_icon.png" },
        operadores: { total: 4, ativos: 4, imgSrc: "/controle.png" }
    };

    const visualizarSeção = (seção) => {
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
            <Dialog isOpen={isConjuntoDialogOpen} className="cadastro_conjunto">
                <DialogTrigger className="cadastro_conjunto-trigger" onClick={openConjuntoDialog}>Cadastrar Conjunto</DialogTrigger>
                <DialogContent>
                    <DialogTitle>Cadastrar Novo Conjunto</DialogTitle>
                    <form onSubmit={handleSubmit}>
                        <div className="section_drones">
                            <h3>Drone</h3>
                            <input type="text" placeholder="Nome Fantasia" value={drone.nome} onChange={(e) => setDrone({ ...drone, nome: e.target.value })} required />
                            <input type="text" placeholder="Número de Série" value={drone.serie} onChange={(e) => setDrone({ ...drone, serie: e.target.value })} required />
                            <input type="text" placeholder="Modelo do Drone" value={drone.modelo} onChange={(e) => setDrone({ ...drone, modelo: e.target.value })} required />
                            <input type="text" placeholder="Horas de Voo Iniciais" value={drone.horas} onChange={(e) => setDrone({ ...drone, horas: e.target.value })} required />
                            <input type="text" placeholder="Observações" value={drone.observacoes} onChange={(e) => setDrone({ ...drone, observacoes: e.target.value })} required />
                        </div>
                        <div className="section_baterias">
                            <h3>Bateria</h3>
                            <input type="text" placeholder="Número de Série" value={bateria.serie} onChange={(e) => setBateria({ ...bateria, serie: e.target.value })} required />
                            <input type="text" placeholder="Modelo da Bateria" value={bateria.modelo} onChange={(e) => setBateria({ ...bateria, modelo: e.target.value })} required />
                            <input type="text" placeholder="Ciclos Iniciais" value={bateria.ciclos} onChange={(e) => setBateria({ ...bateria, ciclos: e.target.value })} required />
                            <input type="text" placeholder="Observações" value={bateria.observacoes} onChange={(e) => setBateria({ ...bateria, observacoes: e.target.value })} required />
                        </div>
                        <div className="section_dispensers">
                            <h3>Dispenser</h3>
                            <input type="text" placeholder="Modelo" value={dispenser.modelo} onChange={(e) => setDispenser({ ...dispenser, modelo: e.target.value })} required />
                            <input type="text" placeholder="Nº de Embalagens por voo" value={dispenser.embalagens} onChange={(e) => setDispenser({ ...dispenser, embalagens: e.target.value })} required />
                            <input type="text" placeholder="Observações" value={dispenser.observacoes} onChange={(e) => setDispenser({ ...dispenser, observacoes: e.target.value })} required />
                        </div>
                        <div className="section_operador">
                            <h3>Operador</h3>
                            <input type="text" placeholder="Nome" value={operador.nome} onChange={(e) => setOperador({ ...operador, nome: e.target.value })} required />
                            <input type="text" placeholder="Nome de Guerra" value={operador.nomeGuerra} onChange={(e) => setOperador({ ...operador, nomeGuerra: e.target.value })} required />
                            <input type="text" placeholder="Número de Guerra" value={operador.numeroGuerra} onChange={(e) => setOperador({ ...operador, numeroGuerra: e.target.value })} required />
                            <input type="text" placeholder="Horas Sobrevoadas" value={operador.horasVoadas} onChange={(e) => setOperador({ ...operador, horasVoadas: e.target.value })} required />
                            <input type="text" placeholder="Área total levantada [ha]" value={operador.areaLevantada} onChange={(e) => setOperador({ ...operador, areaLevantada: e.target.value })} required />
                            <input type="text" placeholder="Nº de Voos" value={operador.voos} onChange={(e) => setOperador({ ...operador, voos: e.target.value })} required />
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                    <button onClick={closeConjuntoDialog}>Fechar</button>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default Logistica;
