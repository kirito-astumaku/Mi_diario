import { useState } from "react";


function Comida() {
  const items = [
    {title:'Crepas', img:'https://www.cocinadelirante.com/sites/default/files/images/2024/04/como-hacer-crepas-con-frutas.jpg'},
    {title:'Pie de manzana', img:'https://mccormick.widen.net/content/5pgmsri5uh/png/Pie%20de%20Manzana.png?crop=true&anchor=341,0&color=ffffff00&u=u0bb0o&w=1365&h=1365'},
    {title:'fresa en chocolate', img:'data:image/jpeg;base64,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'},
    {title:'Pizaa', img:'https://assets.surlatable.com/m/15a89c2d9c6c1345/72_dpi_webp-REC-283110_Pizza.jpg'},
    {title:'Pure de papa', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfFqOX3Fts9LIWRB2TUATGBBOz9CVLjhFoJA&s'},
    {title:'Arroz con leche', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcnLQ1akTBlWHEDOzDSbqjxJfii1KZznFy5A&s'},
    {title:'Tamales', img:'https://lastaquerias.com/wp-content/uploads/2024/04/image-19.jpeg'},
    {title:'Sopa', img:'https://www.cocinacaserayfacil.net/wp-content/uploads/2023/10/Sopa-minestrone.jpg'},
    {title:'Ensalada fria', img:'https://img-global.cpcdn.com/recipes/ea5adfe6bdb5d550/1200x630cq80/photo.jpg'},
    {title:'flan', img:'https://dietamediterranea.com/wp-content/uploads/2017/04/20170424-Flan-1024x768.jpg'},
  ]

  const items2 = [
  { title: "Carne con vegetales", img: "https://cdn0.recetasgratis.net/es/posts/3/7/4/carne_con_verduras_salteadas_65473_orig.jpg",Pista:'tiene vejetales y carne' },
  { title: "Spaghetti", img: "https://images.immediate.co.uk/production/volatile/sites/30/2018/07/RedPepperAnchovySpaghetti-copy-1dec261.jpg?resize=1366,1242",Pista:'son tirars largas de masa' },
  { title: "Paninis", img: "https://www.hola.com/horizon/landscape/02529a5e2bbe-pollo-mozarela-adobe-t.jpg",Pista:'es una comida que esta dentro de dos panes' },
  { title: "Brownie de chocolate", img: "https://www.recetasderechupete.com/wp-content/uploads/2019/11/Brownie-1200x828.jpg",Pista:'Es cuadrado, oscuro y sabe intensamente a chocolate.' },
  { title: "Helado", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoDMS3KWcYEZYgqEohyP3blGTIzXtHZ5u_VA&s",Pista:'esta echo de leche y tiene una forma de circulo' },
  { title: "Pastel de chocolate", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsFDRJyTLAlVPaXhsXlpGpCXYbHQUbw4844w&s",Pista:'esta completamenta echo de chocolate y comienza por Pa' },
  { title: "Nuggets", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdxwkJysqK9z3iNFx9Ojw8klcYQBZtn1NyOw&s",Pista:'pollito asado' },
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

export default Comida
