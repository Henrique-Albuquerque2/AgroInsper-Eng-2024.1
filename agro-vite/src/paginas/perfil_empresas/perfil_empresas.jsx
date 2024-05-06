import React from "react";
import './perfil_empresas.css';
import { Table, TableBody, TableCell, TableHeader, TableRow, TableHead } from "@/components/ui/table";
import NavegacaoPerfil from "@/components/navagacao_perfil/navegacao_perfil";

function PerfilEmpresas() {
    return (
        <div className="p-6">
            <NavegacaoPerfil />
            <div className="border rounded-lg p-6 max-w-4xl mx-auto">
                
                {/* Seção Usuários */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Usuários</h2>
                    <Table>
                        <TableHeader>
                            <TableHead>Empresa</TableHead>
                            <TableHead>CNPJ</TableHead>
                            <TableHead>Ações</TableHead>
                        </TableHeader>
                        <TableBody>
                            {Array.from({ length: 10 }).map((_, i) => (
                                <TableRow key={i}>
                                    <TableCell>Empresa {i}</TableCell>
                                    <TableCell>CNPJ{i}</TableCell>
                                    <TableCell>Ação{i}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
        
    )
}

export default PerfilEmpresas;