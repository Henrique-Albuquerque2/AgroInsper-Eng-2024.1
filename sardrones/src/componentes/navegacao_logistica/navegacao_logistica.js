import React from 'react';
import { NavLink } from 'react-router-dom';
import './navegacao_logistica.css';

function NavegacaoLogistica() {
    return (
        <div className="sub-navigation">
            <NavLink activeClassName="active" to="/logistica">
                Geral
            </NavLink>
            <NavLink activeClassName="active" to="/logistica/logistica_drones">
                Drones
            </NavLink>
            <NavLink activeClassName="active" to="/logistica/logistica_baterias">
                Baterias
            </NavLink>
            <NavLink activeClassName="active" to="/logistica/logistica_dispensers">
                Dispensers
            </NavLink>
            <NavLink activeClassName="active" to="/logistica/logistica_operadores">
                Operadores
            </NavLink>
        </div>
    );
}

export default NavegacaoLogistica;
