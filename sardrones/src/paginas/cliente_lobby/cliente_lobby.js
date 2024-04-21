import React from 'react';
import './cliente_lobby.css';
import { Routes, Route, Link } from 'react-router-dom';
import Voos from '../cliente_voos/cliente_voos';
// import Analises from '../cliente_analises/cliente_analises'

function Lobby() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="Lobby">

            <header className="App-header">

                <div className="logo">
                    <img src= "/logo_apenas.png"  alt="SARdrones Logo"  className='logo_img1'/>
                    <img src= "/logoescrito.png"  alt="Logo escrito"className='logo_img2' />
                    <p>Área do Cliente</p>
                </div>

                <div className="area-login">
                    <nav>

                        <div onClick={toggleMenu}>
                            <img src='/hamburger.png' alt='Hamburger'/>
                        </div>

                        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                            {/* <Link to="/" onClick={toggleMenu}>Lobby</Link> */}
                            <Link to="/voos" onClick={toggleMenu}>Voos</Link>
                            {/* <Link to="/analises" onClick={toggleMenu}>Análises</Link> */}
                        </div>

                    </nav>

                    <Routes>
                        {/* <Route path="/" element={<Lobby />} /> */}
                        <Route path="/voos" element={<Voos />} />
                        {/* <Route path="/analises" element={<Analises />} /> */}
                    </Routes>

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