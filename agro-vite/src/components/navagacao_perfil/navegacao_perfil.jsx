import React from 'react';
import { NavLink } from 'react-router-dom';
import './navegacao_perfil.css';

function NavegacaoPerfil() {
    return (
        <div className="sub-navigation">
        <NavLink activeClassName="active" to="/perfil_empresas">
            Ver Empresas
        </NavLink>
        <NavLink activeClassName="active" to="/perfil_usuarios">
            Ver Usuários
        </NavLink>
        </div>
    );
}

export default NavegacaoPerfil;
