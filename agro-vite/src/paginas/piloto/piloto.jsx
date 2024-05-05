import React, { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle
} from "@/components/ui/dialog";
import './piloto.css';

function Piloto() {
    const [selectedFarm, setSelectedFarm] = useState('');
    const [selectedPlot, setSelectedPlot] = useState('');

    return (
        <div className="piloto-page">
            {/* Seleção de Fazenda */}
            <div className="select-container">
                <Select onValueChange={setSelectedFarm}>
                    <SelectTrigger className="select-trigger">
                        <SelectValue placeholder="Selecionar Fazenda" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="farm1">Fazenda 1</SelectItem>
                        <SelectItem value="farm2">Fazenda 2</SelectItem>
                        <SelectItem value="farm3">Fazenda 3</SelectItem>
                    </SelectContent>
                </Select>

                {/* Seleção de Talhão */}
                <Select onValueChange={setSelectedPlot}>
                    <SelectTrigger className="select-trigger">
                        <SelectValue placeholder="Selecionar Talhão" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="plot1">Talhão 1</SelectItem>
                        <SelectItem value="plot2">Talhão 2</SelectItem>
                        <SelectItem value="plot3">Talhão 3</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Botões para cadastrar fazenda e talhão */}
            <div className="dialog-buttons">
                <Dialog>
                    <DialogTrigger>Cadastrar Fazenda</DialogTrigger>
                    <DialogContent>
                        <DialogTitle>Cadastrar Nova Fazenda</DialogTitle>
                        {/* Formulário de cadastro */}
                    </DialogContent>
                </Dialog>

                <Dialog>
                    <DialogTrigger>Cadastrar Talhão</DialogTrigger>
                    <DialogContent>
                        <DialogTitle>Cadastrar Novo Talhão</DialogTitle>
                        {/* Formulário de cadastro */}
                    </DialogContent>
                </Dialog>
            </div>

            {/* Espaço para o mapa */}
            <div className="map-area">
                {/* Inserir o componente de mapa ou uma imagem estática do mapa */}
            </div>
        </div>
    );
}

export default Piloto;
