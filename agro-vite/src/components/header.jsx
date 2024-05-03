import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css'; // Se você tiver estilos específicos para o cabeçalho
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


function Header() {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const location = useLocation();

    // const toggleMenu = () => {
    //     setIsMenuOpen(!isMenuOpen);
    // };
    // const closeMenu = () => {
    //     setIsMenuOpen(false);
    // };

    // Função para determinar o título com base na rota
    const getPageTitle = (pathname) => {
        switch (pathname) {
            case '/':
                return 'Área do Cliente';
            case '/cliente_voos':
                return 'Meus Voos';
            case '/cliente_analises':
                return 'Análises';
            case '/perfil':
                return 'Perfil';
            case '/logistica':
                return 'Logística';
            case '/logistica_drones':
                return 'Drones';
            case '/logistica_baterias':
                return 'Baterias';
            case '/logistica_dispensers':
                return 'Dispensers';
            case '/logistica_operadores':
                return 'Operadores';
            default:
                return 'Página';
        }
    };

    return (
        <header className="App-header">
            <div className="logo">
                <Link to="/">
                    <img src="/logo_apenas.png" alt="SARdrones Logo" className='logo_img1' />
                    <img src="/logoescrito.png" alt="Logo escrito" className='logo_img2' />
                </Link>
                <p>{getPageTitle(location.pathname)}</p>

            </div>
            <div className="area-login">
                <nav>
                    {/* <div onClick={toggleMenu}>
                        <img src='/hamburger.png' alt='Hamburger'/>
                    </div> */}
                    <DropdownMenu>
                        <DropdownMenuTrigger><img src='/hamburger.png' alt='Hamburger' /></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>
                                <Link to="/">Área do Cliente</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link to="/cliente_voos">Meus Voos</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link to="/cliente_analises">Análises</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link to="/perfil">Perfil</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link to="/logistica">Logística</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    {/* <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                        <Link to="/" onClick={toggleMenu}>Área do Cliente</Link>
                        <Link to="/cliente_voos" onClick={toggleMenu}>Meus Voos</Link>
                        <Link to="/cliente_analises" onClick={toggleMenu}>Análises</Link>
                        <Link to="/perfil" onClick={toggleMenu}>Perfil</Link>
                        <Link to="/logistica" onClick={toggleMenu}>Logística</Link>
                    </div>*/}
                </nav> 
                <Link to="/perfil">
                    <img src='/perfil.png' alt='Perfil' />
                </Link>
            </div>
        </header>
    );
}

export default Header;
