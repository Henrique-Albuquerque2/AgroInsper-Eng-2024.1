import React, { useState } from 'react'
import './InformationPanel.css'

function InformationPanel({ item, onClose }) {
  const [showTextBox, setShowTextBox] = useState(false);

  const handleButtonClick = () => {
    setShowTextBox(prev => !prev);  // Quando o botão é clicado, atualiza o estado para verdadeiro
  };

  return (
    <div className='tudo'>
      <div className="information-panel">
        <img className='earth' src='/earth_map.png' alt='earth_map'/>
        <div className='quadrante'>
          
          <ul>
            <li>Data: {item.data}</li>
            <li>Área: 300ha</li>
            <li>Embalagens lançadas: 16251</li>
            <li>Responsável: Henrique Albuquerque</li>
            <li>Temperatura: 28°C</li>
            <li>Humidade: 70%</li>
            <li>Duração: 40 minutos</li>
            <li>Drone: Agras T40</li>
          </ul>
          
          <div className='botoes'>
            <button className='bot' onClick={onClose}>Fechar</button>
            <button className='bot' onClick={handleButtonClick}>Validar</button>
          {showTextBox && <input className='text' type="text" placeholder="Comentários" autoFocus />}
            <button className='bot'>Download</button>
          </div>

        </div>

      </div>
    </div>  
  );
}

export default InformationPanel;
// import React, { useState } from 'react';
// import './InformationPanel.css';
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"


// function InformationPanel({ item, onClose }) {
//   const [showTextBox, setShowTextBox] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleButtonClick = () => {
//     setShowTextBox(prev => !prev);
//   };

//   const handleOpen = () => {
//     setIsOpen(true);
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//     onClose(); // chame onClose prop quando o diálogo é fechado, se necessário
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={setIsOpen}>
//       <DialogTrigger asChild>
//         <button onClick={handleOpen}>Mostrar Detalhes</button>
//       </DialogTrigger>
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>Detalhes do Voo</DialogTitle>
//           <DialogDescription>Veja mais informações sobre o voo selecionado.</DialogDescription>
//         </DialogHeader>

//         <div className='quadrante'>
//           <ul>
//             <li>Data: {item.data}</li>
//             <li>Área: 300ha</li>
//             <li>Embalagens lançadas: 16251</li>
//             <li>Responsável: Henrique Albuquerque</li>
//             <li>Temperatura: 28°C</li>
//             <li>Humidade: 70%</li>
//             <li>Duração: 40 minutos</li>
//             <li>Drone: Agras T40</li>
//           </ul>

//           <div className='botoes'>
//             <button className='bot' onClick={handleClose}>Fechar</button>
//             <button className='bot' onClick={handleButtonClick}>{showTextBox ? "Esconder Comentários" : "Comentar"}</button>
//             {showTextBox && <input className='text' type="text" placeholder="Comentários" autoFocus />}
//             <button className='bot'>Download</button>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }

// export default InformationPanel;
