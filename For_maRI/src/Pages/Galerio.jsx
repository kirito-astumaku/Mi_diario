import React from 'react'

function Galerio() {
 const items = Array.from({ length: 86 }, (_, i) => ({
    img: `/Manuel_y_Mariana/${i + 1}.jpg`
  }));

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {items.map((item, index) => (
        <div key={index} className="relative">
          <img src={item.img} alt={item.title} className="rounded-lg w-full h-auto object-cover" />
        </div>
      ))}
    </div>

    </div>
  )
}

export default Galerio
