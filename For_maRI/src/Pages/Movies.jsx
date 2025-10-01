import { useState } from 'react'

function Movies() {
  const items = [
    {title:'Hasta que el cielo nos reúna', img:'https://m.media-amazon.com/images/M/MV5BZGE4MTNhNTgtY2I3YS00NmNmLWE1NWUtMmJkM2YzNjVhZjE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'},
    {title:'Estamos muerto', img:'https://pics.filmaffinity.com/jigeum_uri_hakgyoneun-306216055-large.jpg'},
    {title:'Dandadan', img:'https://m.media-amazon.com/images/M/MV5BYWFhOWMxNTYtZThiMi00ZmQ5LTlmODktN2QwNzUyZjMyZGQzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'},
    {title:'Si la vida te da mandarinas', img:'https://m.media-amazon.com/images/M/MV5BZTBhZTcwNWUtOTZjMi00ZjI2LWEzMzMtNWJkMWQ2ZDA0NTU3XkEyXkFqcGc@._V1_.jpg'},
    {title:'Bojack horseman', img:'https://m.media-amazon.com/images/M/MV5BZmMwMDlkNTEtMmQzZS00ODQ0LWJlZmItOTgwYWMwZGM4MzFiXkEyXkFqcGc@._V1_.jpg'},
    {title:'Esta mierda me supera', img:'https://m.media-amazon.com/images/M/MV5BOTVkYzBlNjMtNmMyMi00ZDM3LWFlMDctZmMxOWU5NWM2MmRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'},
    {title:'The Amazing Digital Circus', img:'https://m.media-amazon.com/images/M/MV5BMTlkY2NjODgtOWI5ZC00MjIzLWFiYjItN2ZiOTU5YzA2ODlmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'},
    {title:'Lo que le falta a esta estrella', img:'https://m.media-amazon.com/images/M/MV5BNGY3OWYxMzAtNzllNC00MGU0LThhNDUtMjU1MjNhMWIxYjg1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'},
    {title:'Ranma ½', img:'https://m.media-amazon.com/images/M/MV5BZDYxZWYyZDQtMGMwNS00ZjVmLTllZjMtYmI1Mzc5NGM4NTJiXkEyXkFqcGc@._V1_.jpg'},
    {title:'Bee and PuppyCat', img:'https://m.media-amazon.com/images/M/MV5BNmZhZGU4NjUtMDE3ZC00NjgwLTllOTEtODMyMTA2OTdiNjkzXkEyXkFqcGc@._V1_.jpg'},
    {title:'Dragon ball', img:'https://m.media-amazon.com/images/S/pv-target-images/334f00b53cf3ef848ea7048b25711bc98e8236ce1685a096990c80d0965835ea.png'},
    {title:'Titanic', img:'https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'},
    {title:'Cars', img:'https://m.media-amazon.com/images/M/MV5BNDJiMDE1YTMtNjdjYS00M2RlLWJhOWUtYWU5ODQ0OWQwNTQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'},
    {title:'Toy Story', img:'https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg'},
    {title:'y dónde están las rubias?', img:'https://m.media-amazon.com/images/M/MV5BODFiMTEyY2MtOTVjOS00MTBkLWJmMWEtYjM0Njk5YjVmOGY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'},
    {title:'Son como niños', img:'https://m.media-amazon.com/images/M/MV5BMDJmYWI5NDctZjM5Zi00NzJiLTk4YTEtZjFhYTZhMTJiYWEzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'},
    {title:'Shigatsu no wa kimi no uso', img:'https://m.media-amazon.com/images/M/MV5BZGMyYmFmNzgtMWQ4NS00MWE2LTg4YmEtZGY1MTBiODE0YmE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'},
    {title:'Dr stone', img:'https://m.media-amazon.com/images/M/MV5BYzZkYjM1MWMtNTY3Mi00MTMzLTlhNmQtN2ExZjFkYzdjZmFjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'},
    {title:'Black clover', img:'https://m.media-amazon.com/images/M/MV5BZmZkZjNhMWMtM2U0Mi00MjdlLTk3NmMtMTMwZjgwOTJmODMzXkEyXkFqcGc@._V1_.jpg'},
  ]

  const items2 = [
  { title: "Dragones y Mazmorras", img: "https://img.rtve.es/imagenes/portada-del-libro-dragones-mazmorras-su-historia/1681895953264.jpg",Pista:'En tierras de magia y espada afilada donde un dado decide tu jornada'},
  { title: "Las ventajas de ser invisible", img: "https://m.media-amazon.com/images/M/MV5BYzM0MDI3MjQtZTc0MC00YzNlLWExYjUtNjFlOTg3NmI5ZWUyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",Pista:'No me ves, pero estoy presente mi mente vuela, aunque soy adolescente Entre cartas' },
  { title: "Hilga", img: "https://m.media-amazon.com/images/M/MV5BYmI2ZGE3ODQtYzk1ZC00ZDY3LWI3YzItNjhiOGE2OTM3NjVhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",Pista:'un man quema la casa de sus abuelo y se muda a la ciudad' },
  { title: "One pice", img: "https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_.jpg",Pista:'el prota tiene un sombrero de paja ' },
  { title: "Mob 100", img: "https://m.media-amazon.com/images/M/MV5BYzU3NDM4ZjgtY2UyMi00YTczLTgyNDEtMjBiMDJlOGUxNjcxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",Pista:'exsorcimos dijital' },
  { title: "Arcane", img: "https://m.media-amazon.com/images/M/MV5BNWE5Y2JmZjUtZDlhZS00Njg3LWJlODUtMjhmMGFjYzZmNmU0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",Pista:'buena inclusion y es cine ' },
  { title: "attack on titan", img: "https://m.media-amazon.com/images/M/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",Pista:'el prota se vuelve muy grande cuando se hace daño' },
  { title: "pokemon yo te eligo", img: "https://m.media-amazon.com/images/M/MV5BYTI5M2RmMWUtOGFlMC00M2YxLThiZjUtMjZkNjI3NWQ5NjkwXkEyXkFqcGc@._V1_.jpg",Pista:'el prota consigue bichos que pelean' },
  { title: "horimiya", img: "https://m.media-amazon.com/images/M/MV5BOGUzYmZkZjItNjI5Yi00NjllLThiMjUtYTY0MDI4M2Y0MmZlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",Pista:'el prota oculta tatuajes y mas cosa pero en la escula lo oculta ' },
  { title: "Tokyo Revengers", img: "https://images.justwatch.com/poster/251128847/s332/temporada-1",Pista:'el prota viaja entre el pasado y el presinte y es pandillero' },
  { title: "Kimi no na wa", img: "https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png",Pista:'los protas estan conectados con uno hilo rojo' },
  { title: "las quintillizas", img: "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2023/05/Gotoubun-no-Hanayome-anime-2023-quintillizas.jpg?resize=1280%2C1800&ssl=1",Pista:'hay 5 hermanas y es un anime' },
 
];


const [answers, setAnswers] = useState({});
const [inputs, setInputs] = useState({});


const handleInputChange = (index, value) => {
  setInputs((prev) => ({ ...prev, [index]: value }));
};

const handleValidate = (index, correctTitle) => {
  const userAnswer = inputs[index]?.trim().toLowerCase();
  if (userAnswer === correctTitle.toLowerCase()) {
    setAnswers((prev) => ({ ...prev, [index]: true }));
  }
};

  return (
      <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-11 py-9 w-screen h-screen'>
                 {items.map((items, index) => (
          <div key={index} className='mt-[1rem] px-4'>
         <img className='rounded-lg w-[90%]'  src={items.img} alt="" />
        <h1 className=' top-[2%] left-[37%] text-xl bg-[rgba(0,0,0,0.535)] text-white rounded-lg inline-block '>
          {items.title}
        </h1>
</div>
         ))}

     {items2.map((item, index) => {
  const isUnlocked = answers[index];

  return (
    <div key={index} className="mt-4 px-4 flex flex-col items-center">
      <div className={`w-[90%] h-[200px] rounded-lg overflow-hidden flex items-center justify-center ${isUnlocked ? '' : 'bg-black'}`}>
        <img
          src={item.img}
          alt={item.title}
          className={`w-full h-full object-cover transition-opacity duration-500 ${isUnlocked ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>

      <h1 className="mt-2 text-xl bg-black/60 text-white rounded-lg px-3 py-1">
        {isUnlocked ? item.title : item.Pista }
      </h1>

      {!isUnlocked && (
        <div className="mt-2 w-[90%] flex flex-col items-center gap-2">
          <input
            type="text"
            placeholder="Escribe el nombre del platillo"
            value={inputs[index] || ''}
            onChange={(e) => handleInputChange(index, e.target.value)}
            className="px-3 py-1 border rounded w-full"
          />
          <button
            onClick={() => handleValidate(index, item.title)}
            className="bg-green-600 text-white px-4 py-1 rounded"
          >
            Validar respuesta
          </button>
        </div>
      )}
    </div>
  );
})}

</div>

         

  )
}

export default Movies
