import {useState, useEffect} from 'react'



const NUM_PIEZAS = 9;
function Rompecabezas() {
  const [piezas, setPiezas] = useState([]);
  const [completado, setCompletado] = useState(false);

  useEffect(() => {
    const ordenInicial = Array.from({ length: NUM_PIEZAS }, (_, i) => i);
    const mezclado = ordenInicial.sort(() => Math.random() - 0.5);
    setPiezas(mezclado);
  }, []);

  const intercambiar = (i, j) => {
    const nuevo = [...piezas];
    [nuevo[i], nuevo[j]] = [nuevo[j], nuevo[i]];
    setPiezas(nuevo);
    if (nuevo.every((val, idx) => val === idx)) {
      setCompletado(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50 p-4">
      <h1 className="text-2xl font-bold mb-4">🧩 Arma el rompecabezas</h1>
      <div className="grid grid-cols-3 gap-1 w-72 h-72">
        {piezas.map((pieza, idx) => (
          <div
            key={idx}
            onClick={() => intercambiar(idx, (idx + 1) % NUM_PIEZAS)}
            className="w-full h-full cursor-pointer"
            style={{
              backgroundImage: 'url(/imagenes/Mariana.jpg)', // reemplaza con tu imagen
              backgroundSize: '300% 300%',
              backgroundPosition: `${(pieza % 3) * 100}% ${Math.floor(pieza / 3) * 100}%`,
            }}
          />
        ))}
      </div>

      {completado && (
        <div className="mt-6 text-center text-pink-700 font-semibold text-lg animate-fade-in">
          ¡Lo lograste! Eres la pieza que me completa 💖
        </div>
      )}
    </div>
  );

}

export default Rompecabezas
