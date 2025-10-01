import { useState } from 'react';


function Regalo() {
  const [abierta, setAbierta] = useState(false);
  const [etapa, setEtapa] = useState(0);

  const abrirCaja = () => {
    setAbierta(true);
    setEtapa(1);
  };

  const siguienteEtapa = () => {
    setEtapa((prev) => prev + 1);
  };

  const contenido = [
    "💌 te amo más que ayer más que hoy y más que en el futuro.",
    "📸 ¿Recuerdas esas foto que nos tomamos? esa que guardan un recuerdo de ese momento.",
    "🎶 algunas de las musica que escuchamos son unas de nuestras favoritas y eso lo hace especiales.",
    "🌟 y tu compañia aun que no lo creas alegra mi vida y me motiva.",
    "🎉 puede que esto no sea tanto pero esto lo hice por que queria hacer algo especial para ti y pues tu me motivaste a hacer esto me tomo mucho en hacerlo asi que tomo mi amor mi amor para ti ❤️"
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-50 text-center px-4">
      {!abierta ? (
        <button
          onClick={abrirCaja}
          className="bg-red-500 text-white px-6 py-4 rounded-lg text-xl shadow-lg hover:bg-red-600 transition-transform transform hover:scale-105"
        >
          🎁 Abrir regalo
        </button>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-xl max-w-md">
          <p className="text-lg font-medium text-pink-700 mb-4">
            {contenido[etapa - 1]}
          </p>
          {etapa < contenido.length ? (
            <button
              onClick={siguienteEtapa}
              className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
            >
              Ver más 💖
            </button>
          ) : (
            <p className="text-sm text-gray-500 mt-4">Te amu Marina  🎀</p>
          )}
        </div>
      )}
    </div>
  );

}

export default Regalo
