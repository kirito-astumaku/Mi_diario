import { Link } from 'react-router-dom'

function Minegame() {
  return (
    <div>
      <div className=" h-screen w-screen p-3 text-center bg-zinc-900">
        
         <Link to='/SI_NO'>
         <div className="mt-8 border rounded-md p-2 bg-linear-to-r/srgb from-indigo-500 to-teal-400">
          <h1 >Si o no</h1>
          <p></p>
        </div>
         
         </Link>

        <Link to='/Regalo'>
         <div className="mt-8 border rounded-md p-2 bg-linear-to-r/srgb from-indigo-500 to-teal-400">
          <h1 >Regalito</h1>
          
        </div>
         
         </Link>

         <Link to='/Rompecabezas'>
         <div className="mt-8 border rounded-md p-2 bg-linear-to-r/srgb from-indigo-500 to-teal-400">
          <h1 >Rompecabezas</h1>
        </div>
         
         </Link>



      </div>
    </div>
  )
}

export default Minegame
