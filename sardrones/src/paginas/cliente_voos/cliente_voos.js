// import React from 'react';
// import '../cliente_lobby/cliente_lobby.css';
// import { Routes, Route, Link } from 'react-router-dom';
// import Lobby from '../cliente_lobby/cliente_lobby';

// function Voos() {

//     const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//     const toggleMenu = () => {
//       setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <div>
//             <header className="App-header">
//                 <div className="logo">
//                     <img src= "/logo_apenas.png"  alt="SARdrones Logo"  className='logo_img1'/>
//                     <img src= "/logoescrito.png"  alt="Logo escrito"className='logo_img2' />
//                     <p>Área do Cliente</p>
//                 </div>
//                 <div className="area-login">
//                     <nav>
//                         <div onClick={toggleMenu}>
//                             <img src='/hamburger.png' alt='Hamburger'/>
//                             {/* <div></div>
//                             <div></div>
//                             <div></div> */}
//                         </div>
//                         <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
//                             <Link to="/lobby" onClick={toggleMenu}>Lobby</Link>
//                             {/* <Link to="/about" onClick={toggleMenu}>About</Link>
//                             <Link to="/contact" onClick={toggleMenu}>Contact</Link> */}
//                         </div>
//                     </nav>
//                     <Routes>
//                         <Route path="/lobby" exact component={Lobby} />
//                     </Routes>
//                     <img src='/perfil.png' alt='Perfil' />
//                 </div>
//             </header>
//         </div>
//     );
// }

// export default Voos;