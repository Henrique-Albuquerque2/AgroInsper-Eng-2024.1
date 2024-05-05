import React, { useState } from 'react';
import './logistica_operadores.css';
import NavegacaoLogistica from '../../components/navegacao_logistica/navegacao_logistica';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

function LogisticaOperadores() {
    const [operators, setOperators] = useState([
        { id: 1, nome: "Jane Smith", guerra: "Eagle", numero: "001", horas: 100, area: 150, voos: 20 },
        { id: 2, nome: "John Doe", guerra: "Falcon", numero: "002", horas: 150, area: 300, voos: 30 },
        { id: 3, nome: "Alice Johnson", guerra: "Hawk", numero: "003", horas: 250, area: 400, voos: 50 }
    ]);
    const [editData, setEditData] = useState(null);

    const handleEdit = (data) => {
        setEditData(data);
    };

    const handleSave = (index) => {
        const updatedOperators = [...operators];
        updatedOperators[index] = editData;
        setOperators(updatedOperators);
        setEditData(null);
    };

    return (
        <div className="logistica_operadores_container">
            <NavegacaoLogistica />
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead>Nome de Guerra</TableHead>
                        <TableHead>Número de Guerra</TableHead>
                        <TableHead>Horas Sobrevoeadas</TableHead>
                        <TableHead>Área total Levantada [ha]</TableHead>
                        <TableHead>Nº de Voos</TableHead>
                        <TableHead>Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {operators.map((operator, index) => (
                        <TableRow key={operator.id}>
                            <TableCell>{operator.nome}</TableCell>
                            <TableCell>{operator.guerra}</TableCell>
                            <TableCell>{operator.numero}</TableCell>
                            <TableCell>{operator.horas}</TableCell>
                            <TableCell>{operator.area}</TableCell>
                            <TableCell>{operator.voos}</TableCell>
                            <TableCell>
                                <Popover>
                                    <PopoverTrigger>
                                        <button onClick={() => handleEdit(operator)}>Editar</button>
                                    </PopoverTrigger>
                                    {editData && editData.id === operator.id && (
                                        <PopoverContent>
                                        <form onSubmit={(e) => e.preventDefault()}>
                                            <h3>Atualização do Operador</h3> {/* Título do formulário */}
                                            <label>
                                                Nome:
                                                <input type="text" value={editData.nome} onChange={(e) => setEditData({...editData, nome: e.target.value})} />
                                            </label>
                                            <label>
                                                Nome de Guerra:
                                                <input type="text" value={editData.guerra} onChange={(e) => setEditData({...editData, guerra: e.target.value})} />
                                            </label>
                                            <label>
                                                Número de Guerra:
                                                <input type="text" value={editData.numero} onChange={(e) => setEditData({...editData, numero: e.target.value})} />
                                            </label>
                                            <label>
                                                Horas Sobrevoeadas:
                                                <input type="text" value={editData.horas} onChange={(e) => setEditData({...editData, horas: e.target.value})} />
                                            </label>
                                            <label>
                                                Área Levantada [ha]:
                                                <input type="text" value={editData.area} onChange={(e) => setEditData({...editData, area: e.target.value})} />
                                            </label>
                                            <label>
                                                Nº de Voos:
                                                <input type="text" value={editData.voos} onChange={(e) => setEditData({...editData, voos: e.target.value})} />
                                            </label>
                                            <div style={{ marginTop: '10px' }}>
                                                <button type="button" onClick={() => handleSave(index)}>Salvar</button>
                                                <button type="button" onClick={() => setEditData(null)}>Cancelar</button>
                                            </div>
                                        </form>
                                    </PopoverContent>
                                    
                                    )}
                                </Popover>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default LogisticaOperadores;
