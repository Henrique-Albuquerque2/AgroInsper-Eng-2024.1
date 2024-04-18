import React from 'react';
import './cliente_lobby.css';
import { Link } from 'react-router-dom';

function Lobby() {
    return (
        <div className="Lobby">
            {/* Header com logotipo e área de login */}
            <header className="App-header">
                <div className="logo">
                    <img src= "/logo_apenas.png"  alt="SARdrones Logo" />
                    <img src= "/logoescrito.png"  alt="Logo escrito" />
                    <p className='area-cliente'>Área do Cliente</p>
                </div>
                <div className="login-area">
                    {/* Ícone de usuário para a área de login */}
                    <img src='' alt='Hamburger'/>
                    <img src='' alt='Perfil'/>
                    <button className="login-button">Área do Cliente</button>
                </div>
            </header>

            {/* Seção principal com imagem de fundo e título */}
            <main className="main-content" style={{ backgroundImage: `url("/fundo.jpg")` }}>
                <div className="title-container">
                    <h1>QUALIDADE ACIMA DE TUDO</h1>
                </div>
            </main>

            {/* Navegação inferior */}
            <nav className="bottom-nav">
                <ul>
                    <li>Seus Voos</li>
                    <li>Análises</li>
                </ul>
            </nav>

            {/* Menu hamburguer (adicione funcionalidade conforme necessário) */}
            <div className="hamburger-menu">
                <span>Menu</span>
            </div>
        </div>
    );
}

export default Lobby;