import React from 'react';
import './cliente_lobby.css';
import { Link } from 'react-router-dom';

function Lobby() {
    return (
        <div className="Lobby">
            <header className="App-header">
                <div className="logo">
                    <img src= "/logo_apenas.png"  alt="SARdrones Logo" />
                    <img src= "/logoescrito.png"  alt="Logo escrito" />
                    <p>Área do Cliente</p>
                </div>
                <div className="area-login">
                    <img src='/hamburger.png' alt='Hamburger'/>
                    <img src='/perfil.png' alt='Perfil'/>
                </div>
            </header>

            <div className="lobby-container" style={{ backgroundImage: `url("/fundo.jpg")` }}>
                <div className="background-image">
                    {/* Conteúdo principal da página, por exemplo, links ou botões */}
                </div>
                <div className="trapezoid">
                    <div>
                        <img src='/logo_apenas.png' alt='logo main'/>
                        <h1>SARDRONES</h1>
                    </div>
                    <p>QUALIDADE ACIMA DE TUDO</p>
                    {/* Outros textos ou elementos que você quer no trapézio */}
                </div>
            </div>

            <nav className="bottom-nav">
                <ul>
                    <li>Seus Voos</li>
                    <li>Análises</li>
                </ul>
            </nav>

        </div>
    );
}

export default Lobby;