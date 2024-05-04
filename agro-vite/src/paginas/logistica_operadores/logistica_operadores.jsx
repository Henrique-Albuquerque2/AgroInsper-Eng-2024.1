import React from 'react';
import './logistica_operadores.css';
import NavegacaoLogistica from '../../components/navegacao_logistica/navegacao_logistica';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


function LogisticaOperadores() {
    return (
        <div className="logistica_operadores_container">
            <NavegacaoLogistica />
            <Table>
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Nome</TableHead>
                        <TableHead>Nome de Guerra</TableHead>
                        <TableHead>Número de Guerra</TableHead>
                        <TableHead className="text-right">Horas Sobrevoeadas</TableHead>
                        <TableHead>Área total Levantada [ha]</TableHead>
                        <TableHead>Nº de Voos</TableHead>
                        <TableHead>Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Gabriel Adriano de Melo</TableCell>
                        <TableCell>Gabriel</TableCell>
                        <TableCell>12</TableCell>
                        <TableCell>0.0</TableCell>
                        <TableCell>200</TableCell>
                        <TableCell>1</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </div>
    );
}

export default LogisticaOperadores;
