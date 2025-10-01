import React from 'react';

function Photos() {

  const items = Array.from({ length: 88 }, (_, i) => ({
    img: `/Manuel_y_Mariana/${i + 1}.jpg`
  }));




  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {items.map((item, index) => (
        <div key={index} className="">
          <img
            src={item.img}
            alt={`Foto ${index + 1}`}
            className="rounded-lg w-[100%] h-[100%] object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default Photos;
