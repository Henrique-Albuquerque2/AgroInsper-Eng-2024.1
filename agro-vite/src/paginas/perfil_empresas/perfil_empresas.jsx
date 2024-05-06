import React from "react";
import './perfil_empresas.css';
import { Table, TableBody, TableCell, TableHeader, TableRow, TableHead } from "@/components/ui/table";
import NavegacaoPerfil from "@/components/navagacao_perfil/navegacao_perfil";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, PlusCircle } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

function PerfilEmpresas() {
    return (
        <div>
            <NavegacaoPerfil />
            <div className="margin">
                <h1 className="title">Empresas</h1>
                <form className="form-search">
                    <Input name="nomeEmpresa" placeholder="Nome da Empresa" className="w-auto"/>
                    <Button type="submit" variant="link">
                        <Search className="w-4 h-4 mr-2"/> {/* Ícone de Lupa */}
                        Filtrar
                    </Button> {/* Botão de Busca */}
                </form>

                {/* Seção Empresas */}
                <div>
                    <div className="button">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="primary">
                                    <PlusCircle className="w-4 h-4 mr-2"/> {/* Ícone de + */}
                                    Nova Empresa
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Nova Empresa</DialogTitle>
                                    <DialogDescription>Cadastrar nova empresa</DialogDescription>
                                </DialogHeader>
                                <form action="space-y-6">
                                    <div className="flex flex-col gap-6">
                                        <Label>Empresa</Label>
                                        <Input className="col-span-3" placeholder="Nome da Empresa"/>
                                        <Input className="col-span-3" placeholder="CNPJ"/>
                                        <Input className="col-span-3" placeholder="Ações"/>
                                    </div>
                                    <DialogFooter>
                                        <Button type="button" variant="primary">Salvar</Button>
                                        <Button type="button" variant="primary">Cancelar</Button>
                                    </DialogFooter>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </div>
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
    );
}

export default PerfilEmpresas;
