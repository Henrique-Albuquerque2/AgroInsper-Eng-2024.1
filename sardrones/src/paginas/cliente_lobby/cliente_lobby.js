import React from 'react';
import './cliente_lobby.css';
import { Link } from 'react-router-dom';

function Lobby() {

    return (
        <div className="Lobby">

            <main className="lobby-container" style={{ backgroundImage: `url("/fundo.jpg")` }}>

                <div className="trapezoid">

                    <div className='div1'>
                        <img src='/logo_apenas.png' alt='logo main'/>
                        <h1>SARDRONES</h1>
                    </div>

                    <p>QUALIDADE ACIMA DE TUDO</p>
                    
                    <div className='ul'>
                        <Link to="/cliente_voos">Meus Voos</Link>
                        <Link to="/cliente_analises">Análises</Link>
                    </div>               
                
                </div>

            </main>

        </div>
    );
}

export default Lobby;