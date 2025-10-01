import { useState } from 'react';



function SI_NO() {
const [posicion, setPosicion] = useState({ top: '63%', left: '43%' });
  const [respuesta, setRespuesta] = useState('');

  const moverBoton = () => {
    const maxX = window.innerWidth - 120;
    const maxY = window.innerHeight - 50;
    const nuevaX = Math.floor(Math.random() * maxX);
    const nuevaY = Math.floor(Math.random() * maxY);
    setPosicion({ top: `${nuevaY}px`, left: `${nuevaX}px` });
  };

  const confirmarSi = () => {
    setRespuesta('Sabia que me amabas aun que se que pulsaste el boton "no"');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6 relative overflow-hidden">
      <h1 className="text-2xl font-bold">¿Tu me Amas?</h1>
      <div className="flex gap-6">
        <button
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          onClick={confirmarSi}
        >
          Sí
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded absolute transition-all duration-300"
          style={posicion}
          onMouseOver={moverBoton}
          onClick={moverBoton}
        >
          No
        </button>
      </div>

      {respuesta && (
        <p className="mt-6 text-lg text-blue-700 font-medium animate-fade-in">
          {respuesta}
        </p>
      )}
    </div>
  );



}

export default SI_NO
