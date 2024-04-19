import React from 'react';
import './cliente_lobby.css';
import { Link } from 'react-router-dom';

function Lobby() {
    return (
        <div className="Lobby">
            <header className="App-header">
                <div className="logo">
                    <img src= "/logo_apenas.png"  alt="SARdrones Logo"  className='logo_img1'/>
                    <img src= "/logoescrito.png"  alt="Logo escrito"className='logo_img2' />
                    <p>Área do Cliente</p>
                </div>
                <div className="area-login">
                    <img src='/hamburger.png' alt='Hamburger'/>
                    <img src='/perfil.png' alt='Perfil' />
                </div>
            </header>

            <main className="lobby-container" style={{ backgroundImage: `url("/fundo.jpg")` }}>
                <div className="trapezoid">
                    <div>
                        <img src='/logo_apenas.png' alt='logo main'/>
                        <h1>SARDRONES</h1>
                    </div>
                    <p>QUALIDADE ACIMA DE TUDO</p>
                    <ul>
                        <li>Seus Voos</li>
                        <li>Análises</li>
                    </ul>
                </div>
            </main>

        </div>
    );
}

export default Lobby;