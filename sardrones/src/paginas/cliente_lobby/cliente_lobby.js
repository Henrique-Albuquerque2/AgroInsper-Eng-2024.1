import React from 'react';
import './cliente_lobby.css';
import { Link } from 'react-router-dom';


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
                            <Link to="/voos" onClick={toggleMenu}>Seus Voos</Link>
                            <Link to="/analises" onClick={toggleMenu}>Análises</Link>
                            <Link to="/perfil" onClick={toggleMenu}>Perfil</Link>
                        </div>

                    </nav>

                    <Link to="/perfil">
                        <img src='/perfil.png' alt='Perfil' />
                    </Link>

                </div>

            </header>

            <main className="lobby-container" style={{ backgroundImage: `url("/fundo.jpg")` }}>

                <div className="trapezoid">

                    <div className='div1'>
                        <img src='/logo_apenas.png' alt='logo main'/>
                        <h1>SARDRONES</h1>
                    </div>

                    <p>QUALIDADE ACIMA DE TUDO</p>
                    
                    <div className='ul'>
                        <Link to="/voos">Seus Voos</Link>
                        <Link to="/analises">Análises</Link>
                    </div>               
                
                </div>

            </main>

        </div>
    );
}

export default Lobby;