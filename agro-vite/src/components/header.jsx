import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    //DropdownMenuLabel,
    //DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Função para determinar o título com base na rota
    const getPageTitle = (pathname) => {
        switch (pathname) {
            case '/':
                return 'Área do Cliente';
            case "/cliente_voos":
                return 'Meus Voos';
            case "/cliente_analises":
                return 'Análises';
            case "/perfil":
                return 'Perfil';
            case "/logistica":
                return 'Logística';
            case "/logistica_drones":
                return 'Drones';
            case "/logistica_baterias":
                return 'Baterias';
            case '/logistica_dispensers':
                return 'Dispensers';
            case '/logistica_operadores':
                return 'Operadores';
            case '/piloto':
                return 'Piloto';
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
                    <DropdownMenu>
                        <DropdownMenuTrigger onClick={toggleMenu} className="menu_hamburger" >
                            <img src='/hamburger.png' alt='Hamburger'/>
                        </DropdownMenuTrigger>
                        {isMenuOpen && (
                        <DropdownMenuContent>
                            <DropdownMenuItem onClick={closeMenu}>
                                <Link to="/">Área do Cliente</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={closeMenu}>
                                <Link to="/cliente_voos">Meus Voos</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={closeMenu}>
                                <Link to="/cliente_analises">Análises</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={closeMenu}>
                                <Link to="/perfil">Perfil</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={closeMenu}>
                                <Link to="/logistica">Logística</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={closeMenu}>
                                <Link to="/piloto">Piloto</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                        )}
                    </DropdownMenu>
                <Link to="/perfil">
                    <img src='/perfil.png' alt='Perfil' />
                </Link>
            </div>
        </header>
    );
}

export default Header;
