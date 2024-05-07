import React from "react";
import './perfil_usuarios.css';
import { Table, TableBody, TableCell, TableHeader, TableRow, TableHead } from "@/components/ui/table";
import NavegacaoPerfil from "@/components/navagacao_perfil/navegacao_perfil";

function PerfilUsuarios() {
    return (
        <div>
            <NavegacaoPerfil />
            <div className="margin_usuarios">
                {/* Seção Usuários */}
                    <Table>
                        <TableHeader>
                            <TableHead>Nome</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Empresa</TableHead>
                            <TableHead>CPF</TableHead>
                            <TableHead>Cargo</TableHead> {/* New header for roles */}
                        </TableHeader>
                        <TableBody>
                            {Array.from({ length: 10 }).map((_, i) => (
                                <TableRow key={i}>
                                    <TableCell>Usuario {i}</TableCell>
                                    <TableCell>email{i}@gmail.com</TableCell>
                                    <TableCell>Empresa{i}</TableCell>
                                    <TableCell>CPF{i}</TableCell>
                                    <TableCell>
                                        <select className="form-select">
                                            <option value="admin">Admin</option>
                                            <option value="manager">Gerente</option>
                                            <option value="pilot">Piloto</option>
                                            <option value="client">Cliente</option>
                                            <option value="observer">Observador</option>
                                        </select>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
            </div>
        </div>
    )
}

export default PerfilUsuarios;