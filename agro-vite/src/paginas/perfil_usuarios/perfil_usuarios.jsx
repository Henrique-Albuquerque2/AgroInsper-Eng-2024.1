import React from "react";
import './perfil_usuarios.css';
import { Table, TableBody, TableCell, TableHeader, TableRow, TableHead } from "@/components/ui/table";
import NavegacaoPerfil from "@/components/navagacao_perfil/navegacao_perfil";

function PerfilUsuarios() {
    return (
        <div>
            <NavegacaoPerfil />
            <div className="border rounded-lg p-6 max-w-4xl mx-auto">
                {/* Seção Usuários */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Usuários</h2>
                    <Table>
                        <TableHeader>
                            <TableHead>Nome</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Empresa</TableHead>
                            <TableHead>CPF</TableHead>
                        </TableHeader>
                        <TableBody>
                            {Array.from({ length: 10 }).map((_, i) => (
                                <TableRow key={i}>
                                    <TableCell>Usuario {i}</TableCell>
                                    <TableCell>email{i}@gmail.com</TableCell>
                                    <TableCell>Empresa{i}</TableCell>
                                    <TableCell>CPF{i}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default PerfilUsuarios;