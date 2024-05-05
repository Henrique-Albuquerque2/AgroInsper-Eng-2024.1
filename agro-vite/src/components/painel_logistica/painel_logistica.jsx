// PainelLogistica.js
import React, { useState } from 'react';
import './painel_logistica.css';
import {
    Dialog,
    DialogContent,
    //DialogDescription,
    //DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


function PainelLogistica({ title, total, ativos, visualizarSeção, imgSrc }) {
    const [setIsDialogOpen] = useState(false);

    const closeDialog = () => setIsDialogOpen(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode implementar a lógica para enviar os dados para o servidor
        console.log("Dados do formulário", new FormData(e.target));
        closeDialog();  // Fechar o diálogo após submissão
    };
    

    function getForm(title) {
        switch (title) {
            case "Drones":
                return (
                    <form onSubmit={handleFormSubmit}>
                        <input type="text" placeholder="Nome Fantasia" />
                        <input type="text" placeholder="Número de Série (SN)" />
                        <input type="text" placeholder="Modelo do Drone" />
                        <input type="number" placeholder="Horas de Voo Iniciais" />
                        <input type= "text" placeholder="Observações" />
                        <button type="submit">Salvar</button>
                        <button type="button" onClick={closeDialog}>Cancelar</button>
                    </form>
                );
            case "Baterias":
                return (
                    <form onSubmit={handleFormSubmit}>
                        <input type="text" placeholder="Número de Série (SN)" />
                        <input type="text" placeholder="Modelo da Bateria" />
                        <input type="number" placeholder="Ciclos Iniciais" />
                        <input type= "text" placeholder="Observações" />
                        <button type="submit">Salvar</button>
                        <button type="button" onClick={closeDialog}>Cancelar</button>
                    </form>
                );
            case "Dispensers":
                return (
                    <form onSubmit={handleFormSubmit}>
                        <input type="text" placeholder="Modelo" />
                        <input type="number" placeholder="Nº embalagens por Voo" />
                        <input type= "text" placeholder="Observações" />
                        <button type="submit">Salvar</button>
                        <button type="button" onClick={closeDialog}>Cancelar</button>
                    </form>
                );
            case "Operadores":
                return (
                    <form onSubmit={handleFormSubmit}>
                        <input type="text" placeholder="Nome" />
                        <input type="text" placeholder="Nome de Guerra" />
                        <input type="text" placeholder="Número de Guerra" />
                        <input type="number" placeholder="Horas Sobrevoadas" />
                        <input type="number" placeholder="Área total levantada [ha]" />
                        <input type="number" placeholder="Nº de Voos" />
                        <button type="submit">Salvar</button>
                        <button type="button" onClick={closeDialog}>Cancelar</button>
                    </form>
                );
            default:
                return <div>Formulário não definido</div>;
        }
    }

    return (
        <div className="info-panel">
            <h3>{title}</h3>
            <img src={imgSrc} alt={`${title} Icon`} style={{ height: '100px', width: 'auto' }} />
            <div className="info-panel-content">
                <p>Total: {total}</p>
                <p>Ativos: {ativos}</p>
                <div className="info-panel-actions">
                    <button onClick={visualizarSeção}>Visualizar Seção</button>
                    <Dialog >
                        <DialogTrigger>Cadastrar</DialogTrigger>
                        <DialogContent>
                            <DialogTitle>Cadastrar {title}</DialogTitle>
                            <form>
                                {getForm(title)}
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    );
}

export default PainelLogistica;

